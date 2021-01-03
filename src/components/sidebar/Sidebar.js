import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useStateValue } from '../../context/StateProvider'

function Sidebar () {
  const [{ playlists }] = useStateValue()
  console.log('playlists', playlists)

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

      {playlists?.items?.map(playlist => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}
    </div>
  )
}

export default Sidebar
