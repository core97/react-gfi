import React, { createContext, useReducer } from 'react'

const initialState = {
  movies: []
}

export const actions = {
  addMovies: 'ADD_MOVIES',
  deleteMovies: 'DELETE_MOVIES'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return {
        ...state,
        movies: [...state.movies, ...action.payload.movies]
      }
    case 'DELETE_MOVIES':
      return {
        ...state,
        movies: []
      }
    default:
      return state
  }
}

export const MoviesContext = createContext(initialState)

export const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MoviesContext.Provider value={[state, dispatch]}>
      {children}
    </MoviesContext.Provider>
  )
}
