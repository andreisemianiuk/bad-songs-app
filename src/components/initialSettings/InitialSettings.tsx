import { ChangeEvent, useState } from 'react'
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
  const [error1, setError1] = useState<string | null>(null)
  const [error2, setError2] = useState<string | null>(null)
  
  const fillNameOne = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setName1(value)
    if (value.length > 10) {
      setError1('Длина имени не должна превышать 10 символов')
    } else {
      setError1(null)
    }
  }
  const fillNameTwo = (e: ChangeEvent<HTMLInputElement>) => {
    setName2(e.currentTarget.value)
    const value = e.currentTarget.value
    if (value.length > 10) {
      setError2('Длина имени не должна превышать 10 символов')
    } else {
      setError2(null)
    }
  }
  
  const setPlayers = () => {
    dispatch(playersActions.addPlayers({names: [{name: name1, points: 0}, {name: name2, points: 0}]}))
    close()
  }
  
  return (
    <div className={styles.settings}>
      <div className={styles.inputsContainer}>
        <div className={`${styles.errorContainer} ${error1 || error2 ? styles.errorBackgroundColor : null}`}>
          {error1 || error2}
        </div>
        <input
          className={`${styles.input} ${error1 && styles.errorInput}`}
          type={'text'}
          placeholder={'Enter your name'}
          value={name1}
          onChange={fillNameOne}
        />
        <input
          className={`${styles.input} ${error2 && styles.errorInput}`}
          type={'text'}
          placeholder={'Enter opponent name'}
          value={name2}
          onChange={fillNameTwo}
        />
        <div className={styles.buttonWrapper}>
          <button onClick={setPlayers} className={styles.button}>Готово!</button>
        </div>
      </div>
    </div>
  )
}