import React from 'react'
import './SongRow.css'

export default function SongRow ({ track }) {
  return (
    <div className='songRow'>
      <img className='songRow__album' src={track.album.images[0].url} alt='' />
      <div className='songRow__info'>
        <h1>{track.name}</h1>
        <p>{track.artists?.map(artist => artist.name)}</p>
      </div>
    </div>
  )
}
