import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useStateValue } from '../../context/StateProvider'

function Header ({ spotify }) {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className='header'>
      <div className='header__left'>
        <SearchIcon />
        <input type='text' placeholder='search for artists/podcasts/albums' />
      </div>

      <div className='header__right'>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name}>
          {user?.display_name[0]}
        </Avatar>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
