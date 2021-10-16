import React, { useContext, useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

<<<<<<< HEAD
import { Screens, loginScreen } from "./screens/screens";
=======
import { Screens } from "./screens/screens";
import { UserContext } from "../userContext";
import LoggingButton from "./LoggingButton";
>>>>>>> 952062bf5eeb34fd93b0e3a687802fe8315c99d2

function NavBar() {
  const [name, setName] = useState(undefined);

  const { username, setUsername } = useContext(UserContext);

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
<<<<<<< HEAD
      <button>TEST</button>
=======
      <LoggingButton />
      <button onClick={() => console.log(username)}>TEST</button>
>>>>>>> 952062bf5eeb34fd93b0e3a687802fe8315c99d2
    </nav>
  );
}

export default NavBar;
