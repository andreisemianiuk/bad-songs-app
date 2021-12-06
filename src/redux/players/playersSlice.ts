import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPlayer, IPlayersState } from './playersTypes'
import { v1 } from 'uuid'

const initialState: IPlayersState = {
  players: []
}
const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayers(state, action: PayloadAction<{ names: IPlayer[] }>): void {
      const {names} = action.payload
      state.players.unshift({id: v1(),names: names})
    },
    editPlayersPoints(state, action: PayloadAction<{ queue: 0|1 }>): void {
      const {queue} = action.payload
      state.players[0].names[queue].points++
    }
  },
})

export const playersActions = playersSlice.actions
export const playersReducer = playersSlice.reducer