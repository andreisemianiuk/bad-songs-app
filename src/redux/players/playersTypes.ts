export interface IPlayersState {
  players: ICouple[]
}

interface ICouple {
  id: string
  names: IPlayer[]
}

export interface IPlayer {
  name: string
  points: number
}