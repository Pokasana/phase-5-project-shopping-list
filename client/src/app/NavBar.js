import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div id="nav_bar">
      <NavLink id="nav_link" to='/items'>
        Home
      </NavLink>
      <NavLink id="nav_link" to='/users'>
        Users
      </NavLink>
      <NavLink id="nav_link" to='/shops'>
        Shops
      </NavLink>
    </div>
  );
};

export default NavBar;