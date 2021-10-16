import React, { useState } from "react";
import "./LoginScreen.css";

const axios = require("axios");

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    axios
      .post(
        "http://localhost:44309/api/login",
        {
          user: { username: username, password: password },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("Response from login: ", response);
      })
      .catch((error) => {
        console.log("login error ", error);
      });
    event.preventDefault();
  }

  return (
    <div className="LoginWrapper">
      <form onSubmit={handleSubmit} className="LoginDialog">
        <input
          type="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
