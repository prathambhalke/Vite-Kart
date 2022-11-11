import React from 'react'
import "./Mobile.css"
import { NavLink, useNavigate } from "react-router-dom";

function MobileMenu() {
  const navigate = useNavigate()
  const remove = () => {
    navigate("/Home");
  }
  return (
   <div className="Mob-Container">
    <div className='Icon-container'>
    <i class=" Icon fa-solid fa-square-xmark" onClick={remove}></i>

    </div>
      <ul>
        <li>
          <NavLink className="link" to="/Home">HOME</NavLink>
        </li>

        <li>
          <NavLink className="link" to="/about">ABOUT</NavLink>
        </li>

        <li>
          <NavLink className="link" to="/Products">PRODUCTS</NavLink>
        </li>

        <li>
          <NavLink className="link" to="/Contact">CONTACT</NavLink>
        </li>

        <li>
          <NavLink to="/cart"><span><i class="fa-solid fa-cart-shopping"></i></span></NavLink>
        </li>
      </ul>
      <div>
        
      </div>
    </div>
  )
}

export default MobileMenu
