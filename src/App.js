import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { MoviesContextProvider } from './contexts/moviesContext'

export const App = () => {
  return (
    <MoviesContextProvider>
      <Router>
        <Home path='/' />
        <Details path='/movie/:imdbID' />
      </Router>
    </MoviesContextProvider>
  )
}
