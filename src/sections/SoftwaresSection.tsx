import SkillCard from "../components/SkillCard";
import { softwareIcons } from "../constants/icons";

const SoftwaresSection = () => {
  return (
    <section className="py-16 bg-dirtywhite">
      <h1 className="mb-10 text-center text-5xl font-semibold font-cherry text-royalpink tracking-widest">
        TECH STACKS AND SKILLS
      </h1>

      <div className="grid grid-cols-2 gap-6 m-4 sm:grid-cols-3 md:grid-cols-5">
        {softwareIcons.map(({ label, Icon }) => (
          <SkillCard key={label} Icon={Icon} label={label} />
        ))}
      </div>
    </section>
  );
};

export default SoftwaresSection;
