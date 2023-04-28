import React from "react";
import { NavLink } from 'react-router-dom';

function Sidebar () {
    return (
    <>
        <div class="sidepanel">
        <button class="sidebtn">
          &#9776;
        </button>

        <div class="sidebtn-content">
        <NavLink to="sidecontent1">Side Content 1</NavLink>
        <NavLink to="sidecontent2">Side Content 2</NavLink>
        </div>
      </div>
    </>
    )
};

export default Sidebar;