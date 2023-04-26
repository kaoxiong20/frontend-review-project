import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div class="navbar">
        <NavLink to="home" end>Home</NavLink>
        <NavLink to="about" end>About</NavLink>

      <div class="dropdown">
        <button class="dropbtn">
          Other
        </button>
      </div>
</div>
</>
    )
}

export default NavBar;