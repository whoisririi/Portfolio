import ProjectCard from "../components/ProjectCard";
import pixelbuildImg from "../assets/images/projectimgs/pixelbuild.png";
import visarImg from "../assets/images/projectimgs/visar.png";
import dhvsuImg from "../assets/images/projectimgs/dhvsu.png";
const ProjectsSection = () => {
  return (
    <section className="w-full py-20 bg-pink-100">
      <h2 className="text-center text-4xl font-bold mb-12 text-rusty font-cherry tracking-widest">
        .✦ PROJECTS ✦.
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          image={pixelbuildImg}
          name="PixelBuild Edu Web PC Builder"
          description="A web-based PC builder with real-time compatibility learning features."
          role="UX/UI Designer • Front-End Developer"
          websiteUrl="https://pixelbuild-edu.onrender.com/"
          figmaUrl="https://www.figma.com/proto/TtS8jJ6vZXIecV8v3Ik6dZ/PixelBuild?page-id=32%3A39&node-id=137-714&viewport=673%2C366%2C0.08&t=DRp82r9FrprGcuRG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=137%3A714"
        />

        <ProjectCard
          image={dhvsuImg}
          name="DHVSU E-Learning Hub"
          description="An e-learning platform designed for academic resource accessibility."
          role="UX/UI Designer • Front-End Developer"
          figmaUrl="https://www.figma.com/design/ZvlwwTUJ1XHKFxqLtxWYMj/DHVSU---SMS?node-id=0-1&t=cuHx2bvMUeWccEEB-1"
        />

        <ProjectCard
          image={visarImg}
          name="Visar Society Collection"
          description="A static website showcasing society products through visual storytelling."
          role="UX/UI Designer • Front-End Developer"
          websiteUrl="https://whoisririi.github.io/Visar-Society-Showcase/?fbclid=IwY2xjawPTFr5leHRuA2FlbQIxMABicmlkETFRd1ZENWpseEFZRExXbThMc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgBE7TtjhdF_4IOoVeB8Izj4-mygNYaifd9ODzy3WaQlxIqmanwq_Hcu-d11_aem_a1Vwv9k-QGSBlL32ZI_7NQ"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
