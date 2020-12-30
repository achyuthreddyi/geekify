import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

function Sidebar () {
  return (
    <div className='sidebar'>
      <h1 className='sidebar__logo'>geekify</h1>
      <hr />

      <SidebarOption title='Home' Icon={HomeOutlinedIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      <SidebarOption title='hiphop' />
      <SidebarOption title='jazz' />
      <SidebarOption title='carnatic' />
    </div>
  )
}

export default Sidebar
