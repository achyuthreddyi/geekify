import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Player from './pages/player/Player'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

function App () {
  const [token, setToken] = useState('')

  useEffect(() => {
    const tokenObj = getTokenFromUrl()
    window.location.hash = ''
    const _token = tokenObj.access_token

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log('user', user)
      })
    }

    console.log('i have a token ', token)
  }, [token])

  return <div className='app'>{token ? <Player /> : <Login />}</div>
}
export default App
