import React, { useEffect } from 'react'
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
    // localStorage.setItem('tokenSpotify', _token)

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

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          payload: playlists
        })
      })

      spotify.getPlaylist('37i9dQZF1DWZeKCadgRdKQ').then(response => {
        dispatch({
          type: 'SET_DISPLAY_WEEKLY',
          payload: response
        })
      })

      // spotif y.play({ uris: ['spotify:track:7JrSIPcfkWhDzxWII8Jz7V'] })
    }
    // eslint-disable-next-line
  }, [token])

  console.log('user from the context api ', user)
  // console.log('i have a token ', playlists.items[0].id)

  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  )
}
export default App
