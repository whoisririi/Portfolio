import ribbonIcon from "../assets/logos/ribbon-icon.png";

const FloatingNav = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-6 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full shadow-md">
        {/* About */}
        <button
          onClick={() => scrollToSection("about")}
          className="text-sm font-candal text-[#404030] hover:text-[#CE6B8B] transition"
        >
          About
        </button>

        {/* Software */}
        <button
          onClick={() => scrollToSection("software")}
          className="text-sm font-candal text-[#404030] hover:text-[#CE6B8B] transition"
        >
          Software
        </button>

        {/* Ribbon Icon → Top */}
        <button onClick={() => scrollToSection("home")} className="mx-2">
          <img
            src={ribbonIcon}
            alt="Back to top"
            className="w-8 h-8 hover:scale-110 transition-transform"
          />
        </button>

        {/* Projects */}
        <button
          onClick={() => scrollToSection("projects")}
          className="text-sm font-candal text-[#404030] hover:text-[#CE6B8B] transition"
        >
          Projects
        </button>

        {/* Others */}
        <button
          onClick={() => scrollToSection("others")}
          className="text-sm font-candal text-[#404030] hover:text-[#CE6B8B] transition"
        >
          Others
        </button>
      </div>
    </nav>
  );
};

export default FloatingNav;
