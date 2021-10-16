import React, { useState } from "react";
import { getUsername, setUsername } from "../userData";
import { NavLink } from "react-router-dom";
import { loginScreen } from "./screens/screens";

export default function LoggingButton() {
  const [name, setName] = useState(getUsername());
  if (name !== undefined)
    return (
      <div>
        <h5>Hello, {name}</h5>
        <button
          onClick={() => {
            setUsername(undefined);
            setName(undefined);
          }}
        >
          Wyloguj
        </button>
      </div>
    );
  else
    return (
      <NavLink
        to={`${loginScreen.path}`}
        className="NavListItem"
        exact
        activeClassName="active"
      >
        {loginScreen.name}
      </NavLink>
    );
}
