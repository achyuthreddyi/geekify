import React from 'react'
import './Body.css'
import Header from './Header'
import { useStateValue } from '../../context/StateProvider'

function Body ({ spotify }) {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body__info'>
        <img src={user?.images[0]?.url} alt='' />
        <div className='body__infoText'>
          <strong>Playlist</strong>
          <h2>Discover weekly</h2>
          <p>description</p>
        </div>
      </div>
    </div>
  )
}

export default Body
