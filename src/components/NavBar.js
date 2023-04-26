import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div class="navbar">
        <NavLink to="*" end>Home</NavLink>
        <NavLink to="about" end>About</NavLink>
        <NavLink to="goals" end>Goals</NavLink>

      <div class="dropdown">
        <button class="dropbtn">
          Other
        </button>

        <div class="dropdown-content">
        <NavLink to="Test1">Test 1</NavLink>
        <NavLink to="Test2">Test 2</NavLink>
    </div>

      </div>
</div>
</>
    )
}

export default NavBar;