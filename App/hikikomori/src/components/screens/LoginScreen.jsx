import React, { useState } from "react";
import "./LoginScreen.css";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    console.log("start fetchowania");
    const res = await fetch("https://localhost:44309/api/Login");
    const user = await res.json();
    console.log(user);
    console.log("powinno juz wydrukowac");
  }

  return (
    <div className="LoginWrapper">
      {/* <form onSubmit={() => handleSubmit()} className="LoginDialog"> */}
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
      {/* </form> */}
    </div>
  );
}
