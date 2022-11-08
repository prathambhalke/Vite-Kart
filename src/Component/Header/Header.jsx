import React from 'react'
import "./Header.css"
import Nav from '../Nav/Nav'
function Header() {
  return (
    <div className='Header-Container'>
      <h2 className='ViteCom'>Vite|Kart</h2>
      <Nav />
    </div>
  )
}

export default Header
