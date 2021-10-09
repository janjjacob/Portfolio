import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Bottombar from "./components/Bottombar";
import Experience from "./components/Experience";
import Extracurriculars from "./components/Extracurriculars";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Extracurriculars />
      <Bottombar />
    </main>
  );
}
