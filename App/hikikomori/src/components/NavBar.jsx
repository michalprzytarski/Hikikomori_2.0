import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import { Screens } from "./screens/screens";

function NavBar() {
  return (
    <nav className="NavBar">
      <div>
        <h1>Hikikomori</h1>
      </div>
      <ul className="NavList">
        {Screens.map((screen) => (
          <Link to={`${screen.path}`}>
            <li style={{ color: "#fff" }}>{screen.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
