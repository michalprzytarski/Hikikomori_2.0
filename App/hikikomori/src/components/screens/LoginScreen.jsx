import React, { useState } from "react";
import "./LoginScreen.css";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    const res = await fetch("https://localhost:44309/api/Login");
    const usersArray = await res.json();
    console.log(usersArray);
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
