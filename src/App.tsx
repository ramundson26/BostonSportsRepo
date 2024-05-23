import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import { HeadlinesList } from "./HeadlinesList";
import { StatsTable } from "./StatsTable";
import Signup from "./signup";
import Login from "./login";
import Logout from "./logout";
import UserDisplay from "./userDisplay";
import Home from "./homePage";
import "./style.css";

function App() {
  return (
    <div id="page-div" className="h-lvh grid place-content-center">
      <div
        id="container-div"
        className="flex flex-col bg-gray-300 text-black w-[400px] h-[300px] border-solid border-black border-2"
      >
        <div id="signup-login-div" className="flex flex-col content-between">
          <Signup />
          <div className="signup-login-div">
            <Login />
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
