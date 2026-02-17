import "./App.css";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SoftwaresSection from "./sections/SoftwaresSection";
import ProjectsSection from "./sections/ProjectsSection";
import OthersSection from "./sections/OthersSection";
import ContactId from "./sections/ContactId";
import FloatingNav from "./components/FloatingNav";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

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
      <ContactId />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
