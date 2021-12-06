import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './app/appSlice'
import { songsReducer } from './songs/songsSlice'
import { playersReducer } from './players/playersSlice'

const rootReducer = combineReducers({
  app: appReducer,
  songs: songsReducer,
  players: playersReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>