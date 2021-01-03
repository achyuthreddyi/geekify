import React from 'react'
import './Body.css'
import Header from './Header'
import { useStateValue } from '../../context/StateProvider'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import SongRow from '../songRow/SongRow'

function Body ({ spotify }) {
  const [{ discoverWeekly }] = useStateValue()

  // "context_uri": "spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"
  // const playPlayList = id => {
  //   spotify
  //     .play({
  //       context_uri: 'spotify:album:1Je1IMUlBXcx1Fz0WE7oPT'
  //     })
  //     .then(res => {
  //       spotify.getMyCurrentPlayingTrack().then(r => {
  //         console.log('current playing track ', r.item)
  //       })
  //     })
  //     .catch(err => {
  //       console.log('error in the playplaylists', err)
  //     })
  // }

  const playSong = _ => {
    console.log('in the playsong method')
    spotify
      .play({
        // spotify:track:6rqhFgbbKwnb9MLmUQDhG6
        context_uri: 'spotify:track:6rqhFgbbKwnb9MLmUQDhG6'
      })
      .then(res => {
        spotify.getMyCurrentPlayingTrack().then(r => {
          console.log('current playing track in the playsong method', r.item)
        })
      })
  }

  console.log('discover weekly songs', discoverWeekly)
  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body__info'>
        <img src={discoverWeekly?.images[0]?.url} alt='' />
        <div className='body__infoText'>
          <strong>Playlist</strong>
          <h2>{discoverWeekly?.name}</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>

      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilled className='body__shuffle' onClick={playSong} />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>
        {/* list of songs */}
        {discoverWeekly?.tracks?.items.map(item => (
          <SongRow key={item.id} playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
