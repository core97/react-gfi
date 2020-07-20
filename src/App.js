import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Layout } from './components/Layout'
import { MoviesContextProvider } from './contexts/MoviesContext'
import AuthContext from './contexts/AuthContext'

export const App = () => {
  return (
    <>
      <AuthContext.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <MoviesContextProvider>
              <Router>
                <Layout default>
                  <Home path='/' />
                  <Details path='/movie/:imdbID' />
                </Layout>
              </Router>
            </MoviesContextProvider>
          ) : (
            <MoviesContextProvider>
              <Router>
                <Layout default>
                  <NotRegisteredUser path='/' />
                  <NotRegisteredUser path='/movie/:imdbID' />
                </Layout>
              </Router>
            </MoviesContextProvider>
          )}
      </AuthContext.Consumer>
    </>
  )
}
