import React, { useState } from "react";
import "./style.css";
import { Button } from "@material-tailwind/react";
import { auth } from "./firebase.tsx";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (event) => {
    console.log(username);
  };

  return (
    <div id="signup-div" className="flex flex-col">
      <input
        id="signup-username"
        className="signup-login-input"
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        id="signup-email"
        className="signup-login-input"
        type="email"
        placeholder="email address"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        id="signup-password"
        className="signup-login-input"
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        onClick={signup}
        className="border-3 bg-blue-gray-400 rounded-md mb-3"
      >
        Signup
      </Button>
    </div>
  );
}

export default Signup;
