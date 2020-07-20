import React, { useState, useEffect, createContext } from 'react'

import { useSessionStorage } from '../hooks/useSessionStorage'
import userData from '../user.mock.json'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const key = `isLogged-${userData.username}`
  const [isLoggedSessionStorage] = useSessionStorage(key)
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    if (isLoggedSessionStorage === true) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [isLoggedSessionStorage])

  return (
    <AuthContext.Provider value={isAuthenticated}>
      {children}
    </AuthContext.Provider>
  )
}
