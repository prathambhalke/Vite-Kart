import React from "react";
import { NavLink } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <div className="Main-Error">
      <i class=" err fa-solid fa-triangle-exclamation"></i>
      <span>
        <h1>404 Error</h1>
      </span>
      <NavLink to="/">
        <button className="err-Btn">Go to home</button>
      </NavLink>
    </div>
  );
}

export default Error;
