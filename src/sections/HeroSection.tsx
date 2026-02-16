import heroSelf from "../assets/images/heroself.png";
import portfolioText from "../assets/images/portfolio-text.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-dirtywhite flex items-center justify-center overflow-hidden px-6">
      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-royalpink/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-dirtygold/20 rounded-full blur-3xl" />

      {/*Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 mt-16">
        {/* Heading */}
        <div className="space-y-4">
          <h1 className="font-cherry text-5xl sm:text-6xl md:text-7xl tracking-wide text-royalpink drop-shadow-sm">
            Welcome to Ifa’s
          </h1>
        </div>

        {/* Image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-royalpink/30 blur-2xl rounded-full scale-110 group-hover:scale-125 transition duration-500"></div>

          <img
            src={heroSelf}
            alt="Ifa"
            className="relative w-64 sm:w-72 md:w-80 object-contain transition duration-500 group-hover:-translate-y-2"
          />
        </div>

        {/* Portfolio Text */}
        <img
          src={portfolioText}
          alt="Portfolio Text"
          className="w-72 sm:w-80 md:w-96 object-contain"
        />

        <p className="font-source text-lg text-rusty max-w-md mx-auto leading-relaxed">
          A UX/UI Designer in progress...
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-4 mb-8">
          <a
            href="#projects"
            className="px-6 py-2 bg-royalpink text-white rounded-full font-source font-semibold hover:scale-105 transition duration-300 shadow-md"
          >
            View Projects
          </a>

          <a
            href="#about"
            className="px-6 py-2 border border-royalpink text-royalpink rounded-full font-source font-semibold hover:bg-royalpink hover:text-white transition duration-300"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
