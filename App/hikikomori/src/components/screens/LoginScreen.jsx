import React, { useState, useContext } from "react";
import { UserContext, UserName } from "../../userContext";
import "./LoginScreen.css";

export default function LoginScreen() {
  const [_username, _setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { userame, setUsername } = useContext(UserContext);
  const { name, setName } = useContext(UserName);

  async function handleSubmit(event) {
    console.log("start fetchowania");
    const res = await fetch(
      "https://localhost:44309/api/login/" + _username + "/" + password
    );
    const user = await res.json();
    console.log(user);

    if (user !== null) {
      setUsername(user.Username);
      setName(user.Name);
    }
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
