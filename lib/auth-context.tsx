'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if mock auth cookie exists on mount
    // TODO: Instead of checking cookie, we should check cookie value.
    const hasAuthCookie = document.cookie.includes('auth-session')
    setIsAuthenticated(hasAuthCookie)
  }, [])

  const login = () => {
    // Set mock auth cookie
    document.cookie = 'auth-session=true; path=/'
    setIsAuthenticated(true)
  }

  const logout = () => {
    // Remove mock auth cookie
    document.cookie = 'auth-session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
// Custom hook to access the authentication context
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 