import { Routes, Route } from "react-router-dom";

import "./App.scss";

import About from "./Components/About";
import Border from "./Components/Border";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MovingBackground from "./Components/MovingBackground";
import OpeningPage from "./Components/Opening-page";
import Projects from "./Components/Projects";
import TechDesignWork from "./Components/TechDesignWork";
import TheCollabLab from "./Components/TheCollabLab";

function App() {
  return (
    <>
    <Border />
    <MovingBackground />
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<OpeningPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/tech-design-work" element={<TechDesignWork />}></Route>
        <Route path="/the-collab-lab-info" element={<TheCollabLab />}></Route>
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
