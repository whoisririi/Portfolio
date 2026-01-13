import { useState } from "react";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SoftwaresSection from "./sections/SoftwaresSection";
import ProjectsSection from "./sections/ProjectsSection";
import OthersSection from "./sections/OthersSection";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SoftwaresSection />
      <ProjectsSection />
      <OthersSection />
      <Footer />
    </>
  );
}

export default App;
