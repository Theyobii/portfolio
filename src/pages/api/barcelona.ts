import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {

  const API_KEY = import.meta.env.FOOTBALL_API_KEY;

  const res = await fetch(
    "https://api.football-data.org/v4/teams/81/matches?status=FINISHED",
    {
      headers: { "X-Auth-Token": API_KEY },
    }
  );

  const data = await res.json();

  const ultimos5_crudos = data.matches.slice(-5);

  let victorias = 0;
  let empates = 0;
  let derrotas = 0;
  let golesFavor = 0;
  let golesContra = 0;

  // 1. Array para almacenar los partidos con el formato deseado
  const ultimos5_simplificados = ultimos5_crudos.map((m: any) => {
    // Lógica para determinar si el Barça fue local
    const local = m.homeTeam.name === "FC Barcelona";
    
    // Extracción de datos para el resumen y el formato simplificado
    const golesBarça = local ? m.score.fullTime.home : m.score.fullTime.away;
    const golesRival = local ? m.score.fullTime.away : m.score.fullTime.home;
    const rival = local ? m.awayTeam.name : m.homeTeam.name;
    
    // Lógica para el resumen (sin cambios)
    golesFavor += golesBarça;
    golesContra += golesRival;

    if (golesBarça > golesRival) victorias++;
    else if (golesBarça === golesRival) empates++;
    else derrotas++;

    // 2. Devolvemos el objeto simplificado que queremos mostrar en el cliente
    return {
      rival: rival,
      golesBarça: golesBarça,
      golesRival: golesRival,
      competicion: m.competition.name,
    };
  });

  return new Response(
    JSON.stringify({
      equipo: "FC Barcelona",
      // 3. Devolvemos el array simplificado
      ultimos5: ultimos5_simplificados, 
      resumen: {
        victorias,
        empates,
        derrotas,
        golesFavor,
        golesContra,
        rendimiento:
          ((victorias * 3 + empates) / (5 * 3) * 100).toFixed(1) + "%",
      },
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};