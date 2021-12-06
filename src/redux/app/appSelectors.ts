import { AppRootStateType } from '../store'

const getGameNumber = (state: AppRootStateType): number => state.app.gameNumber

export const appSelectors = {
  getGameNumber,
}