import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './styles.module.css'
import appContext from '../../../context/appContext'

const Game = () => {
  const [question, setQuestion] = useState(null)
  const router = useRouter()
  const { questions } = useContext(appContext)

  useEffect(() => {
    if (questions) {
      setQuestion(questions[id - 1])
      console.log(questions[id - 1])
    }
  }, [questions])

  const {
    query: { id },
  } = router

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Question N° {id}/10</h2>
        <p className={styles.category}>{question ? question.category : ''}</p>
      </div>
      <div className={styles.questions}>
        <div>{question ? question.question : ''}</div>
      </div>
    </div>
  )
}

export default Game
