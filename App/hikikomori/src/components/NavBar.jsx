import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

import { Screens } from "./screens/screens";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h1>HIKIKOMORI</h1>
      </NavLink>
      <ul className="NavList">
        {Screens.map((screen) => (
          <li key={screen.key}>
            <NavLink
              to={`${screen.path}`}
              className="NavListItem"
              exact
              activeClassName="active"
            >
              {screen.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
