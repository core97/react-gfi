import React from 'react'

import { Home } from './pages/Home'

import { MoviesContextProvider } from './contexts/moviesContext'

export const App = () => {
  return (
    <MoviesContextProvider>
      <Home />
    </MoviesContextProvider>
  )
}
