import { useState } from 'react'
import styles from './InitialSettings.module.css'
import { useDispatch } from 'react-redux'
import { playersActions } from '../../redux/players/playersSlice'

type PropsType = {
  close: () => void
}

export const InitialSettings = ({close}: PropsType) => {
  const dispatch = useDispatch()
  
  const [name1, setName1] = useState<string>('')
  const [name2, setName2] = useState<string>('')
  
  const setPlayers = () => {
    dispatch(playersActions.addPlayers({names: [{name: name1, points: 0}, {name: name2, points: 0}]}))
    close()
  }
  
  return (
    <div className={styles.settings}>
      <div className={styles.inputsContainer}>
        <input
          className={styles.input}
          type={'text'}
          placeholder={'Enter your name'}
          value={name1}
          onChange={(e) => setName1(e.currentTarget.value)}
        />
        <input
          className={styles.input}
          type={'text'}
          placeholder={'Enter opponent name'}
          value={name2}
          onChange={(e) => setName2(e.currentTarget.value)}
        />
        <div className={styles.buttonWrapper}>
          <button onClick={setPlayers} className={styles.button}>Готово!</button>
        </div>
      </div>
    </div>
  )
}