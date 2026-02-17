import Namelogo from "../assets/logos/Namelogo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-lightpink w-full py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* LEFT */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <img src={Namelogo} alt="Ifa Tiffany Logo" className="w-40" />
          <p className="text-sm text-textgray max-w-xs leading-relaxed">
            Designed & developed with love by yours truly. UX/UI Designer &
            Frontend Developer.
          </p>
        </div>

        {/* MIDDLE CTA */}
        <div className="flex flex-col justify-center gap-4 md:w-1/3">
          <h3 className="text-lg text-royalpink font-source font-extrabold">
            Let’s Build Something Together
          </h3>
          <p className="text-sm text-textgray leading-relaxed max-w-sm font-semibold">
            Open for internships, freelance projects, and creative
            collaborations.
          </p>
          <a
            href="mailto:ifatiffany@gmail.com"
            className="w-fit px-6 py-2 rounded-full bg-royalpink text-white text-sm hover:scale-105 transition duration-300 font-source font-semibold"
          >
            Email me!
          </a>
        </div>

        {/* RIGHT: Navigation + Socials */}
        <div className="flex flex-col gap-8 md:w-1/3">
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-royalpink mb-3">
              Navigation
            </h4>
            <div className="flex flex-wrap gap-4 text-sm text-textgray">
              {["home", "about", "software", "projects", "others"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="hover:text-royalpink transition duration-300"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-textgray/30 w-full" />

          {/* Socials */}
          <div>
            <h4 className="text-sm font-bold text-royalpink mb-3">Connect</h4>
            <div className="flex flex-wrap gap-4 text-sm text-textgray">
              <a
                href="https://www.facebook.com/ifadlrs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-royalpink transition duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/ifadlcrz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-royalpink transition duration-300"
              >
                Instagram
              </a>
              <a
                href="https://github.com/whoisririi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-royalpink transition duration-300"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/ifa-dela-rosa-5a728434b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-royalpink transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-xs text-textgray mt-6">UPDATED © {year}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
