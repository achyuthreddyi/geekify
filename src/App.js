import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Player from './pages/player/Player'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useStateValue } from './context/StateProvider'

const spotify = new SpotifyWebApi()

function App () {
  const [{ user, token }, dispatch] = useStateValue()

  useEffect(() => {
    const tokenObj = getTokenFromUrl()
    window.location.hash = ''
    const _token = tokenObj.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        payload: _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      })
    }
  }, [token])

  console.log('user from the context api ', user)
  console.log('i have a token ', token)

  return <div className='app'>{token ? <Player /> : <Login />}</div>
}
export default App
