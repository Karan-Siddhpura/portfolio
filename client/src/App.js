import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">

          <Header />
          <Experience />
          <div id="skills"></div>
          <Skills />
          <div id="projects"></div>
          <Projects />
        </div>

        <a className="arrow" href="#home"><img src="./asset/arrow.png" /></a>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
