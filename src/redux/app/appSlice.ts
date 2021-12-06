import { createSlice } from '@reduxjs/toolkit'

export interface IAppState {
  isFetching: boolean
  gameNumber: number
}

const initialState: IAppState = {
  isFetching: false,
  gameNumber: 0
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsFetching(state, action):void {
      state.isFetching = action.payload
    },
    increaseGamesCount(state):void {
      state.gameNumber++
    }
  },
  
})

export const appActions = appSlice.actions
export const appReducer = appSlice.reducer