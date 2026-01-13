import heroSelf from "../assets/images/heroself.png";
import portfolioText from "../assets/images/portfolio-text.png";
import ribbonIcon from "../assets/logos/ribbon-icon.png";

import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center bg-dirtywhite text-royalpink font-bold">
      <div className="flex flex-col">
        <div className="text-center">
          <h1>Welcome to Ifa&#39;s</h1>
        </div>
        <div className="flex justify-center items-center">
          <img src={heroSelf} alt="Photo" />
        </div>
        <div className="flex justify-center items-center">
          <img src={portfolioText} alt="Portfolio Text" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
