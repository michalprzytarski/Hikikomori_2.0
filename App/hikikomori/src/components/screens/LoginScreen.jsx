import React, { useState } from "react";
import "./LoginScreen.css";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    const res = await fetch("http://localhost:5000/api/users");
    const user = await res.json();
  }

  return (
    <div className="LoginWrapper">
      <div onSubmit={() => handleSubmit()} className="LoginDialog">
        <input
          type="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          //   required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          //   required
        />
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  );
}
