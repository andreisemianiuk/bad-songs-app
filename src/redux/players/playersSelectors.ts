import { AppRootStateType } from '../store'
import { IPlayersState } from './playersTypes'

const getPlayers = (state: AppRootStateType): IPlayersState => state.players
// const getPlayersPoints = (state: AppRootStateType): IPlayersState => state.players

export const playersSelectors = {
    getPlayers,
}