import React from "react";
import "./style.css";
import { Button } from "@material-tailwind/react";

function Login() {
  return (
    <div id="login-div" className="flex flex-col">
      <input
        id="input-email"
        className="border-3"
        type="email"
        placeholder="email address"
        name="email"
      />
      <input
        id="input-password"
        className="border-3"
        type="password"
        placeholder="password"
        name="password"
      />
      <Button
        className="border-3 bg-blue-gray-400 rounded-md mb-3 "
        onClick={() => setWhichPage(1)}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
