import React, { useState } from 'react'
import './App.css'
import logo from '../src/images/bad-songs.jpg'
import { InitialSettings } from './components/initialSettings/InitialSettings'
import { Game } from './components/game/Game'
import { useDispatch, useSelector } from 'react-redux'
import { appSelectors } from './redux/app/appSelectors'
import { songsActions } from './redux/songs/songsSlice'
import { songsSelectors } from './redux/songs/songsSelectors'

function App() {
  const dispatch = useDispatch()
  const [isOpenGame, setIsOpenGame] = useState<boolean>(false)
  const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false)
  const gameNumber = useSelector(appSelectors.getGameNumber)
  const countOfSongs = useSelector(songsSelectors.getSongs).songs.length
  
  const startGame = () => {
    dispatch(songsActions.getSongsForRound({gameNumber}))
    setIsOpenSettings(true)
    setIsOpenGame(true)
  }
  
  const closeSettings = () => {
    setIsOpenSettings(false)
  }
  
  return (
    <div className="App">
      <h1 className={'App-title'}>Bad Songs</h1>
      <img className={'App-logo'} src={logo} alt={'bad-songs-logo'}/>
      {
        isOpenGame ?
          isOpenSettings
            ? <InitialSettings close={closeSettings}/>
            : <Game startGame={() => setIsOpenGame(false)}/>
          : <div className={'App-button'}>
            {(gameNumber + 1) * 10 < countOfSongs
              ? <button onClick={startGame}>Start Game</button>
              : <h3 className={'App-warning'}>Пожалуйста, обновите игру!</h3>
            }
          </div>
      }
    </div>
  )
}

export default App
