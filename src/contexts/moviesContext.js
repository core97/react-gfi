import React, { createContext, useReducer } from 'react'

const initialState = {
  movies: [],
  page: 1
}

export const actions = {
  addMovies: 'ADD_MOVIES',
  deleteMovies: 'DELETE_MOVIES',
  nextPage: 'NEXT_PAGE'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.addMovies:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.movies]
      }
    case actions.deleteMovies:
      return {
        ...state,
        movies: [],
        page: 1
      }
    case actions.nextPage:
      return {
        ...state,
        page: state.page + 1
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
