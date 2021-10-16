<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useContext } from "react";
import { UserContext } from "../../userContext";
>>>>>>> 952062bf5eeb34fd93b0e3a687802fe8315c99d2
import "./LoginScreen.css";

export default function LoginScreen() {
  const [_username, _setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { userame, setUsername } = useContext(UserContext);

  async function handleSubmit(event) {
    console.log("start fetchowania");
    const res = await fetch("https://localhost:44309/api/Login");
    const user = await res.json();
<<<<<<< HEAD
=======
    console.log(user);

    if (user !== undefined) {
      setUsername(user.username);
    }

>>>>>>> 952062bf5eeb34fd93b0e3a687802fe8315c99d2
  }

  return (
    <div className="LoginWrapper">
      <div onSubmit={() => handleSubmit()} className="LoginDialog">
        <input
          type="username"
          name="username"
          placeholder="Username"
          value={_username}
          onChange={(event) => _setUsername(event.target.value)}
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
