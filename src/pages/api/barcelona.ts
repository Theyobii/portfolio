import type { APIRoute } from 'astro'
import type { MatchDetailsResponse } from '../../types/barcelona.ts'

interface ApiTeamName {
  name: string
}

interface ApiScoreFullTime {
  home: number | null
  away: number | null
}

interface ApiScore {
  fullTime: ApiScoreFullTime
}

interface ApiCompetition {
  name: string
}

interface ApiMatchRaw {
  homeTeam: ApiTeamName
  awayTeam: ApiTeamName
  score: ApiScore
  competition: ApiCompetition
}

interface FootballDataMatchesResponse {
  matches: ApiMatchRaw[]
}

export const GET: APIRoute = async () => {
  const API_KEY = String(import.meta.env.FOOTBALL_API_KEY ?? '')

  if (!API_KEY) {
    return new Response(JSON.stringify({ message: 'Unauthorized: Football Data API_KEY not found' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const res = await fetch('https://api.football-data.org/v4/teams/81/matches?status=FINISHED', {
    headers: { 'X-Auth-Token': API_KEY },
  })

  if (!res.ok) {
    return new Response(JSON.stringify({ message: 'Upstream error fetching matches', status: res.status }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const data = (await res.json()) as FootballDataMatchesResponse
  const matches = Array.isArray(data.matches) ? data.matches : []

  const ultimos5_crudos = matches.slice(-5)

  let victorias = 0
  let empates = 0
  let derrotas = 0
  let golesFavor = 0
  let golesContra = 0

  const ultimos5_simplificados = ultimos5_crudos.map((m) => {
    const local = m.homeTeam?.name === 'FC Barcelona'
    const golesHome = m.score?.fullTime?.home ?? 0
    const golesAway = m.score?.fullTime?.away ?? 0

    const golesBarça = local ? golesHome : golesAway
    const golesRival = local ? golesAway : golesHome
    const rival = local ? (m.awayTeam?.name ?? 'Unknown') : (m.homeTeam?.name ?? 'Unknown')

    golesFavor += golesBarça
    golesContra += golesRival

    if (golesBarça > golesRival) victorias++
    else if (golesBarça === golesRival) empates++
    else derrotas++

    return {
      rival,
      golesBarça,
      golesRival,
      competicion: m.competition?.name ?? 'Unknown',
    }
  })

  const partidosConsiderados = ultimos5_simplificados.length || 5
  const rendimiento =
    partidosConsiderados > 0
      ? (((victorias * 3 + empates) / (partidosConsiderados * 3)) * 100).toFixed(1) + '%'
      : '0.0%'

  const payload = {
    equipo: 'FC Barcelona',
    ultimos5: ultimos5_simplificados,
    resumen: {
      victorias,
      empates,
      derrotas,
      golesFavor,
      golesContra,
      rendimiento,
    },
  } as MatchDetailsResponse & { equipo: string; ultimos5: unknown[] }

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
