import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.scss";

import Border from "./Components/Border";
import MovingBackground from "./Components/MovingBackground";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import OpeningPage from "./Components/Opening-page";
import About from "./Components/About";

function App() {
  return (
    <>
    <Border />
    <MovingBackground />
    <Header />
    <main className="wrapper">
      <Routes>
        <Route path="/" element={<OpeningPage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

    </main>
    <Footer />
    </>
  );
}

export default App;
