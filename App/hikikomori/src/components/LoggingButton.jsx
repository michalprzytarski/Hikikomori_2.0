import React, { useState, useContext } from "react";
import { UserContext } from "../userContext";
import { NavLink } from "react-router-dom";
import { loginScreen } from "./screens/screens";

export default function LoggingButton() {
  const { username, setUsername } = useContext(UserContext);
  if (username !== undefined)
    return (
      <div>
        <h5>Hello, {username}</h5>
        <button
          onClick={() => {
            setUsername(undefined);
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
