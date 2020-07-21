import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import AuthContext from './contexts/AuthContext'

import './styles/GlobalStyles.scss'

ReactDOM.render(
  <AuthContext.Provider>
    <App />
  </AuthContext.Provider>,
  document.getElementById('app')
)
