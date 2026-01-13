import React from "react";
import { abilities } from "../constants/AbilityIcons";

const OthersSection: React.FC = () => {
  return (
    <section className="bg-dirtywhite px-12 py-16">
      {/* Title */}
      <h2 className="text-royalpink text-4xl font-bold mb-10 font-candal tracking-wide">
        OTHERS:
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* INTERESTS */}
        <div>
          <span className="inline-block bg-lightpink text-textgray font-bold px-6 py-2 rounded-full mb-6">
            INTERESTS
          </span>

          <div className="flex flex-wrap gap-3 mt-1">
            {[
              "WebDesign",
              "Drawing",
              "VideoEdit",
              "GameDevelopment",
              "DigitalArt",
              "Music",
              "MobileDesign",
              "UX/UI",
              "Videography",
              "Reading",
              "Anime",
              "Gaming",
              "Crocheting",
            ].map((interest) => (
              <span
                key={interest}
                className="px-4 py-1 border-2 border-lightpink rounded-full text-sm text-textgray"
              >
                #{interest}
              </span>
            ))}

            {/* Plus tag */}
            <span className="px-4 py-1 border border-lightpink rounded-full text-sm text-textgray">
              +
            </span>
          </div>
        </div>

        {/* ABILITIES */}
        <div>
          <span className="inline-block bg-lightpink text-textgray px-6 py-2 rounded-full font-bold mb-8">
            ABILITIES
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6">
            {abilities.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-2"
              >
                <Icon size={36} className="text-royalpink" strokeWidth={1.5} />
                <span className="text-sm text-textgray font-source">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OthersSection;
