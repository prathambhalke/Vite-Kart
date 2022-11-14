import React, { useState } from "react";
import "./Nav.css";
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const toMenu = () => {
    navigate("/MobileMenu");
  };

  return (
    <div className="Nav-Container">
      <ul>
        <li>
          <NavLink className="link" to="/">
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink className="link" to="/about">
            ABOUT
          </NavLink>
        </li>

        <li>
          <NavLink className="link" to="/Products">
            PRODUCTS
          </NavLink>
        </li>

        <li>
          <NavLink className="link" to="/Contact">
            CONTACT
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            <span>
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
          </NavLink>
        </li>
      </ul>
      <div>
        <div className="mobile-menu" onClick={toMenu}>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
