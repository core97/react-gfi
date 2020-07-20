import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Login } from './pages/Login'
import { MoviesContextProvider } from './contexts/moviesContext'

export const App = () => {
  return (
    <MoviesContextProvider>
      <Router>
        <Home path='/' />
        <Login path='/login' />
        <Details path='/movie/:imdbID' />
      </Router>
    </MoviesContextProvider>
  )
}
