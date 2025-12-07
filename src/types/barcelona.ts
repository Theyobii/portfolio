export interface Entity {
  id?: number
  name: string
}

export interface Player extends Entity {
  position?: string
  shirtNumber?: number
}

export interface DetailedPlayer extends Player {
  position: string
  shirtNumber: number
}

export interface Coach extends Entity {
  countryOfBirth?: string | null
  nationality?: string | null
}

export interface Captain extends Player {
  shirtNumber?: number
}

export interface MatchTeam extends Entity {
  coach?: Coach
  captain?: Captain
  lineup?: DetailedPlayer[]
  bench?: DetailedPlayer[]
}

/* --- Score types --- */
export interface TimeScore {
  homeTeam: number | null
  awayTeam: number | null
}

export type Winner = 'HOME_TEAM' | 'AWAY_TEAM' | 'DRAW' | null
export type Duration = 'REGULAR' | 'EXTRA_TIME' | 'PENALTY_SHOOTOUT'

export interface Score {
  winner: Winner
  duration: Duration
  fullTime: TimeScore
  halfTime: TimeScore
  extraTime: TimeScore
  penalties: TimeScore
}

/* --- Events --- */
export interface Goal {
  minute: number
  extraTime?: number | null
  type?: string
  team: Entity
  scorer: Player
  assist?: Player | null
}

export interface Booking {
  minute: number
  team: Entity
  player: Player
  card: 'YELLOW_CARD' | 'RED_CARD'
}

export interface Substitution {
  minute: number
  team: Entity
  playerOut: Player
  playerIn: Player
}

export interface Referee extends Entity {
  nationality?: string | null
}

/* --- Head2Head --- */
export interface Head2HeadTeam {
  wins: number
  draws: number
  losses: number
}

export interface Head2Head {
  numberOfMatches: number
  totalGoals: number
  homeTeam: Head2HeadTeam
  awayTeam: Head2HeadTeam
}

/* --- Season --- */
export interface Season {
  id: number
  startDate?: string
  endDate?: string
  currentMatchday?: number
  availableStages?: string[]
}

/* --- Match --- */
export interface Match {
  id: number
  competition: Entity
  season?: Season
  utcDate?: string
  status?: string
  minute?: number | null
  attendance?: number | null
  venue?: string | null
  matchday?: number | null
  stage?: string | null
  group?: string | null
  lastUpdated?: string | null
  homeTeam?: MatchTeam
  awayTeam?: MatchTeam
  score?: Score
  goals?: Goal[]
  bookings?: Booking[]
  substitutions?: Substitution[]
  referees?: Referee[]
}

/* --- Main response --- */
export interface MatchDetailsResponse {
  head2head?: Head2Head
  match?: Match
}
