import idCard from "../assets/images/idcard.png";
import TabButton from "./TabButton";
import { useState } from "react";

//  tab type
type TabKey = "education" | "leadership" | "contacts";

const AboutSection = () => {
  //state for active tab
  const [activeTab, setActiveTab] = useState<TabKey>("education");

  return (
    <div className="flex w-full bg-lightpink">
      {/* LEFT */}
      <div className="flex flex-col justify-end">
        <img src={idCard} alt="idCard" />
      </div>

      {/* RIGHT */}
      <div className="flex flex-col p-6 gap-6">
        {/* HEADER */}
        <div>
          <h1 className="font-bold text-royalpink text-4xl m-2">Hey Rahhh</h1>
          <p className="w-[450px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo conse
          </p>
        </div>

        {/*TAB BUTTONS */}
        <div className="flex gap-3">
          <TabButton
            label="EDUCATION"
            isActive={activeTab === "education"}
            onClick={() => setActiveTab("education")}
          />
          <TabButton
            label="LEADERSHIP"
            isActive={activeTab === "leadership"}
            onClick={() => setActiveTab("leadership")}
          />
          <TabButton
            label="CONTACTS"
            isActive={activeTab === "contacts"}
            onClick={() => setActiveTab("contacts")}
          />
        </div>

        {/*TAB CONTENT */}
        <div className="bg-pink-100 p-4 rounded-lg">
          {activeTab === "education" && <p>Education content goes here</p>}
          {activeTab === "leadership" && <p>Leadership content goes here</p>}
          {activeTab === "contacts" && <p>Contacts content goes here</p>}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
