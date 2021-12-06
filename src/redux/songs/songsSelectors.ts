import { AppRootStateType } from '../store'
import { ISongsState } from './songsTypes'

const getSongs = (state: AppRootStateType): ISongsState => state.songs

export const songsSelectors = {
    getSongs,
}