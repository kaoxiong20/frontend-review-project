import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div class="navbar">
        <NavLink to="home" end>Home</NavLink>
        <NavLink to="about" end>About</NavLink>
        <NavLink to="experience" end>Experience</NavLink>

      <div class="dropdown">
        <button class="dropbtn">
          Projects
        </button>

        <div class="dropdown-content">
        <NavLink to="djdaysproject">DJ Days Project</NavLink>
        <NavLink to="restaurantproject">Restaurant Project</NavLink>
        <NavLink to="apiproject">API Project</NavLink>
        <NavLink to="moodtrackerproject">Mood Tracker Project</NavLink>
    </div>
  </div>
</div>
</>
  )
};

export default NavBar;