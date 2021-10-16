import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

import { Screens, loginScreen } from "./screens/screens";
import { getUsername, setUsername } from "../userData";
import LoggingButton from "./LoggingButton";

function NavBar() {
  const [name, setName] = useState(undefined);

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
      <LoggingButton />
      <button onClick={() => console.log(getUsername())}>TEST</button>
    </nav>
  );
}

export default NavBar;
