import React, { useReducer } from 'react'
import appContext from './appContext'
import appReducer from './appReducer'
import axiosClient from '../config/axiosClient'
import { GET_QUESTIONS } from '../types/'

const AppState = ({ children }) => {
  const initialState = {
    questions: null,
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const getQuestions = async category => {
    try {
      const q = await axiosClient.get(`/?search=cat&category=${category}&difficulty=medium&limit=10`)
      dispatch({
        type: GET_QUESTIONS,
        payload: q.data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <appContext.Provider
      value={{
        questions: state.questions,
        getQuestions,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
