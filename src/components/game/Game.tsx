import React, { useState } from 'react'
import styles from './Game.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { playersSelectors } from '../../redux/players/playersSelectors'
import { songsSelectors } from '../../redux/songs/songsSelectors'
import { playersActions } from '../../redux/players/playersSlice'
import { songsActions } from '../../redux/songs/songsSlice'
import { appActions } from '../../redux/app/appSlice'

type GameType = {
  startGame: () => void
}

export const Game = ({startGame}:GameType) => {
  const dispatch = useDispatch()
  const [queue, setQueue] = useState<0 | 1>(0)
  const [isGivenAnswer, setIsGivenAnswer] = useState<boolean>(false)
  const songs = useSelector(songsSelectors.getSongs).songsForRound[0]
  const countOfRemainingSongs = useSelector(songsSelectors.getSongs).songsForRound.length
  const players = useSelector(playersSelectors.getPlayers).players[0]
  
  const goToNextPlayer = () => {
    setQueue(queue ? 0 : 1)
    dispatch(songsActions.decreaseSong())
    setIsGivenAnswer(false)
  }
  const evaluateAnswer = (answer: boolean) => {
    if (answer) dispatch(playersActions.editPlayersPoints({queue}))
    setIsGivenAnswer(true)
  }
  const startNewGame = () => {
    startGame()
    dispatch(appActions.increaseGamesCount())
  }
  return (
    <>
      {countOfRemainingSongs
        ? (<div className={styles.container}>
          {
            !queue
            ? <PlayerDashboard number={0}/>
            : <PlayerDashboard number={1}/>
          }
          <div className={styles.songInfo}>
            <div className={styles.artist}>
              <span>{songs?.artist ? songs.artist : ''}</span>
            </div>
            <div className={styles.song}>
              <span>{songs?.songTitle || ''}</span>
            </div>
            <div className={styles.hint}>
              Не помнишь мотив песни?<br/>
              Здесь напоминание <a href={`${songs?.youtubeRef ? songs.youtubeRef : ''}`} target={'_blank'}>{songs?.youtubeRef ? songs.youtubeRef : ''}</a>
            </div>
            <div className={styles.content}>
              Слова песни:<br/><span>{songs?.content ? songs.content : ''}</span>
            </div>
          </div>
          {
            !isGivenAnswer
            ? <div className={styles.answersWrapper}>
              Соперник засмеялся?
              <button onClick={() => evaluateAnswer(true)}>Да</button>
              <button onClick={() => evaluateAnswer(false)}>Нет</button>
            </div>
            : <button onClick={goToNextPlayer} className={styles.nextPlayer}>Следующий игрок</button>
          }
        </div>)
        : (<div>
          <div>Счет {`${players.names[0].name} - ${players.names[0].points} ${players.names[1].name} - ${players.names[1].points}`}</div>
          <div onClick={startNewGame}>
            Следующая игра
          </div>
        </div>)
      }
    </>
  )
}

type PlayerDashboardType = {
  number: 0 | 1
}

const PlayerDashboard = ({number}: PlayerDashboardType) => {
  const players = useSelector(playersSelectors.getPlayers).players[0].names
  return (
    <div className={styles.playerName}>
      {players[number].name}
    </div>
  )
}