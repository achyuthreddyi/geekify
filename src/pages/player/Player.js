import React from 'react'
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import './Player.css'

function Player ({ spotify }) {
  return (
    <div className='player'>
      <div className='player__body'>
        {/* sidebar */}
        <Sidebar />
        {/* body */}
        <Body spotify={spotify} />
      </div>
      <div className='player__footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Player
