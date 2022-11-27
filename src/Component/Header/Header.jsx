import React, { useState } from 'react'
import "./Header.css"
import Nav from '../Nav/Nav'
function Header() {
  const [navbar, setnavbar] = useState(false)
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      setnavbar(true)
    } else {
      setnavbar(false)
    }
  })
  return (
    <div className={navbar ? "after-Scroll" : "Header-Container"}>
      <h2 className='ViteCom'>Vite|Kart</h2>
      <Nav />
    </div>
  )
}

export default Header
