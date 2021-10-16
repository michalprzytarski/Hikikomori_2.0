import React, { useState, useContext } from "react";
import { UserContext } from "../userContext";
import { NavLink } from "react-router-dom";
import { loginScreen } from "./screens/screens";
import "./LoggingButton.css";

export default function LoggingButton() {
  const { username, setUsername } = useContext(UserContext);
  if (username !== undefined)
    return (
      <div>
        <h5>Hello, {username}</h5>
        <div
          className="LogoutButton"
          onClick={() => {
            setUsername(undefined);
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
