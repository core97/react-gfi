import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { MovieDetails } from './pages/MovieDetails'

import { MoviesContextProvider } from './contexts/moviesContext'

export const App = () => {
  return (
    <MoviesContextProvider>
      <Router>
        <Home path='/' />
        <MovieDetails path='/movie/:imdbID' />
      </Router>
    </MoviesContextProvider>
  )
}
