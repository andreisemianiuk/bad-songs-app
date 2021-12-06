export interface ISongsState {
  songs: ISong[]
  songsForRound: ISong[]
}

export interface ISong {
  id: string
  artist: string
  songTitle: string
  youtubeRef: string
  content: string
}

