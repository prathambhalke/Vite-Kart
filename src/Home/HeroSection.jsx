import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";
import svg from "../assets/react.svg"
import Home from "./Home"
function HeroSection({data}) {
  return (
    <div className="Hero-main">
      <div className="Hero-Container">
        <p>WELCOME TO</p>
        <h1 className="Brand">Vite|{data}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil
          ex unde dolor dolorum dolores repellat quasi assumenda adipisci!
          Assumenda vitae iusto sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci ipsum officiis?
        </p>
        <NavLink to="/Products">
          <button className="Hero_btn">Shop Now</button>
        </NavLink>
      </div>
      <div className="Logo">
      <i class=" Home fa-solid fa-shop"></i>


      </div>
    </div>
  );
}

export default HeroSection;
