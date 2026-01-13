import { useState } from "react";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SoftwaresSection from "./sections/SoftwaresSection";
import ProjectsSection from "./sections/ProjectsSection";
import OthersSection from "./sections/OthersSection";
import Footer from "./sections/Footer";
import FloatingNav from "./components/FloatingNav";

function App() {
  return (
    <>
      <FloatingNav />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="software">
        <SoftwaresSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="others">
        <OthersSection />
      </section>
      <Footer />
    </>
  );
}

export default App;
