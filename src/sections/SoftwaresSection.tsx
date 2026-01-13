import React from "react";
import SkillCard from "../components/SkillCard";
//images
import moreIcon from "../assets/softwareicons/MoreIcons.png";
import figmaIcon from "../assets/softwareicons/FigmaIcon.png";
import htmlIcon from "../assets/softwareicons/htmlcssicon.png";
import reactIcon from "../assets/softwareicons/ReactIcon.png";
import tailwindIcon from "../assets/softwareicons/TailwindIcon.png";
import capcutIcon from "../assets/softwareicons/CapcutIcon.png";
import amIcon from "../assets/softwareicons/amicon.png";
import msIcon from "../assets/softwareicons/msicon.png";
import canvaIcon from "../assets/softwareicons/canvaicon.png";

const SoftwaresSection = () => {
  return (
    <div className="bg-dirtywhite">
      <h1 className="font-bold text-5xl">SOFTWARE AND LANGUAGES SKILLS</h1>
      <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-4 px-10">
        <SkillCard icon={moreIcon} label="More" />
        <SkillCard icon={figmaIcon} label="Figma" />
        <SkillCard icon={htmlIcon} label="HTML + CSS" />
        <SkillCard icon={reactIcon} label="React" />
        <SkillCard icon={tailwindIcon} label="Tailwind" />
        <SkillCard icon={capcutIcon} label="Capcut" />
        <SkillCard icon={amIcon} label="Alight Motion" />
        <SkillCard icon={msIcon} label="MS Word + Powerpoint" />
        <SkillCard icon={canvaIcon} label="Canva" />
      </div>
    </div>
  );
};

export default SoftwaresSection;
