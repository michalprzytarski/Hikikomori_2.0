import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import { Screens } from "./screens/screens";

function NavBar() {
  return (
    <nav className="NavBar">
      <h1>HIKIKOMORI</h1>
      <ul className="NavList">
        {Screens.map((screen) => (
          <Link to={`${screen.path}`} className="NavListItem">
            <li>{screen.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
