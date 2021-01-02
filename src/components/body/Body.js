import React from 'react'
import './Body.css'
import Header from './Header'
import { useStateValue } from '../../context/StateProvider'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import SongRow from '../songRow/SongRow'

function Body ({ spotify }) {
  const [{ user, discoverWeekly }, dispatch] = useStateValue()
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
          <PlayCircleFilled className='body__shuffle' />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>
        {/* list of songs */}
        {discoverWeekly?.tracks?.items.map(item => (
          <SongRow key={item.id} track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
