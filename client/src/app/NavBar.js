import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div id="nav_bar">
      <NavLink id="nav_link" to='/items'>
        Items
      </NavLink>
      <NavLink id="nav_link" to='/users'>
        Users
      </NavLink>
      <NavLink id="nav_link" to='/shops'>
        Shops
      </NavLink>
      <NavLink id="nav_link" to='/login'>
        Login
      </NavLink>
    </div>
  );
};

export default NavBar;