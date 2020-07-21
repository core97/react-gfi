import React, { createContext, useState, useEffect } from 'react'
import { navigate } from '@reach/router'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token') || null
  })

  useEffect(() => {
    if (!isAuth) navigate('/')
  }, [isAuth])

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    }
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default {
  Provider: AuthContextProvider,
  Consumer: AuthContext.Consumer
}
