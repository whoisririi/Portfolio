import ProjectCard from "../components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="w-full py-20 bg-pink-100">
      <h2 className="text-center text-3xl font-bold mb-12">✨ PROJECTS ✨</h2>

      <div className="max-w-6xl mx-auto grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          image="/projects/pixelbuild.png"
          name="PixelBuild Edu Web PC Builder"
          description="A web-based PC builder with real-time compatibility learning features."
          role="UX/UI Designer • Front-End Developer"
          websiteUrl="https://example.com"
          figmaUrl="https://figma.com"
        />

        <ProjectCard
          image="/projects/dhvsu-elearning.png"
          name="DHVSU E-Learning Hub"
          description="An e-learning platform designed for academic resource accessibility."
          role="UX/UI Designer • Front-End Developer"
          figmaUrl="https://figma.com"
        />

        <ProjectCard
          image="/projects/visar.png"
          name="Visar Society Collection"
          description="A static website showcasing society products through visual storytelling."
          role="UX/UI Designer • Front-End Developer"
          websiteUrl="https://example.com"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
