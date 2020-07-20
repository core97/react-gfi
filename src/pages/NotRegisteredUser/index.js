import React from 'react'

import AuthContext from '../../contexts/AuthContext'
import { Login } from '../../components/Login'

export const NotRegisteredUser = () => {
  return (
    <AuthContext.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <Login activateAuth={activateAuth} />
          </>
        )
      }}
    </AuthContext.Consumer>
  )
}
