import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Player from './pages/player/Player'
import { getTokenFromUrl } from './spotify'

function App () {
  const [token, setToken] = useState('')

  useEffect(() => {
    const tokenObj = getTokenFromUrl()
    window.location.hash = ''
    const _token = tokenObj.access_token

    if (_token) {
      setToken(_token)
    }

    console.log('i have a token ', token)
  }, [token])

  return <div className='app'>{token ? <Player /> : <Login />}</div>
}
export default App
