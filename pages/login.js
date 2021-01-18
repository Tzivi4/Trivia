import React from 'react'
import { loginWithGithub, loginWithGoogle } from '../firebase/client'
import styles from '../styles/login.module.css'

const login = () => {
  const handleGithubLogin = async () => {
    try {
      const r = await loginWithGithub()
      console.log(r)
    } catch (error) {
      console.log(error)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const r = await loginWithGoogle()
      console.log(r)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        <p className={styles.heading}>Join Trivia for free!</p>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleGithubLogin}>
            <img className={styles.image} src="/github.png" alt="" />
            <span>Login with Github</span>
          </button>
          <button className={styles.button} onClick={handleGoogleLogin}>
            <img className={styles.image} src="/google.png" alt="" />
            <span className={styles.text}>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default login
