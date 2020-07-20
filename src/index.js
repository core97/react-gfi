import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { AuthContextProvider } from './contexts/authContext'

import './styles/GlobalStyles.scss'

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('app')
)
