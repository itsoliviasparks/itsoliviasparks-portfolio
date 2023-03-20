import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.scss";

import Border from "./Components/Border";
import MovingBackground from "./Components/MovingBackground";

function App() {
  return (
    <>
    <Border />
    <MovingBackground />

    <h1 className="wrapper">olivia sparks</h1>
    </>
  );
}

export default App;
