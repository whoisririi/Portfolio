import { useState } from "react";
import "./App.css";
import HeroSection from "../src/components/HeroSection";
import AboutSection from "../src/components/AboutSection";
import SoftwaresSection from "./components/SoftwaresSection";
import ProjectsSection from "./components/ProjectsSection";
import OthersSection from "./components/OthersSection";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SoftwaresSection />
      <ProjectsSection />
      <OthersSection />
    </>
  );
}

export default App;
