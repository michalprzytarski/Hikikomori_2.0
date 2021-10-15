import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

import { Screens } from "./screens/screens";

function NavBar() {
  return (
    <nav className="NavBar">
      <h1>HIKIKOMORI</h1>
      <ul className="NavList">
        {Screens.map((screen) => (
          <NavLink to={`${screen.path}`} className="NavListItem" exact activeClassName="active">
            <li>{screen.name}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
