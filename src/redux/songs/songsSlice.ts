import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISongsState } from './songsTypes'
import { v1 } from 'uuid'

const initialState: ISongsState = {
  songs: [
    {
      id: v1(),
      artist: 'А.Пугачева',
      songTitle: 'Падали две звезды',
      youtubeRef: 'https://youtu.be/vM11QpYzhwk?t=35',
      content: 'Алексей Панин...\nКиркоров и Басков…\nПадаль и две звезды'
    },
    {
      id: v1(),
      artist: 'RASA',
      songTitle: 'Пчеловод',
      youtubeRef: 'https://youtu.be/9knYNjp95bs?t=14',
      content: 'А я в улей сунул лоб\nТы пчела, я долбаёб'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    }
  ],
  songsForRound: []
}

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    getSongsForRound(state, action: PayloadAction<{ gameNumber: number }>):void {
      const {gameNumber} = action.payload
      state.songsForRound = state.songs.slice(gameNumber*10,gameNumber*10 + 10)
    },
    decreaseSong(state):void {
      state.songsForRound.shift()
    },
  },
})

export const songsActions = songsSlice.actions
export const songsReducer = songsSlice.reducer