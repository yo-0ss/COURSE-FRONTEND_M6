import React from 'react'
import './App.css'
import { useState } from 'react'
import Authenticated from './Authenticated'
import Welcome from './Welcome'
import Login from './Login'

function App() {
  
  const[isAuthenticated, setIsAuthenticated] =  useState(false)
  const[user, setUser] = useState(null)

  const handleLogin = (username) => {
    setIsAuthenticated(true)
    setUser(username)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <>
      <section style={{padding: '2rem'}}>
        <h1>Clown App</h1>

        <Authenticated isAuthenticated={isAuthenticated}>
            <Welcome onLogout={handleLogout} username={user}/>
            <Login onLogin={handleLogin}/>
        </Authenticated>
        
      </section>
    </>
  )
}

export default App
