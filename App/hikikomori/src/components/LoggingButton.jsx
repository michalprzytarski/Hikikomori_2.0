import React, { useState, useContext } from "react";
import { UserContext, UserName } from "../userContext";
import { NavLink } from "react-router-dom";
import { loginScreen } from "./screens/screens";
import "./LoggingButton.css";

export default function LoggingButton() {
  const { name, setName } = useContext(UserName);
  const { username, setUsername } = useContext(UserContext);
  if (username !== undefined)
    return (
      <div>
        <h5>Hello, {name}</h5>
        <div
          className="LogoutButton"
          onClick={() => {
            setName(undefined);
            setUsername(undefined)
          }}
        >
          Wyloguj
        </div>
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
