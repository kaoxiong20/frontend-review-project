import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div class="navbar">
        <NavLink to="home" end>Home</NavLink>
        <NavLink to="about" end>About</NavLink>
        <NavLink to="experience" end>Experience</NavLink>
        <NavLink to="projects" end>Projects</NavLink>

      <div class="dropdown">
        <button class="dropbtn">
          Other
        </button>

        <div class="dropdown-content">
        <NavLink to="othercontent1">Other Content 1</NavLink>
        <NavLink to="othercontent2">Other Content 2</NavLink>
    </div>
  </div>
</div>
</>
  )
};

export default NavBar;