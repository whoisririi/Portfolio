import idCard from "../assets/images/idcard.png";
import TabButton from "../components/TabButton";
import { useState } from "react";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

// tab type
type TabKey = "education" | "leadership" | "contacts";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("education");

  return (
    <section className="w-full bg-lightpink px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* LEFT – IMAGE */}
        <div className="flex justify-center lg:justify-end lg:w-1/3">
          <img
            src={idCard}
            alt="ID Card"
            className="w-64 sm:w-72 lg:w-80 object-contain"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="flex flex-col gap-8 lg:w-2/3">
          {/* HEADER */}
          <div>
            <h1 className="font-bold text-4xl sm:text-5xl text-royalpink mb-4">
              Hi, I'm <span className="text-dirtygold">Ifa Tiffany</span>
            </h1>

            <p className="text-base sm:text-lg font-semibold font-source text-rusty leading-relaxed">
              I am a creative Computer Science student specializing in UI/UX
              design and front-end development. Currently a 4th year student at
              Pampanga State University. I have experience designing responsive
              web interfaces and leading student organizations, with a passion
              for user-centered digital experiences.
            </p>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex flex-wrap gap-3">
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

          {/* TAB CONTENT (STABLE CONTAINER) */}
          <div className="bg-pink-100 rounded-xl p-6 min-h-[280px] transition-all">
            {/* EDUCATION */}
            {activeTab === "education" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-bold text-xl text-rusty">
                    Tertiary – Pampanga State University
                    <span className="text-textgray font-medium">
                      {" "}
                      (2022 – Present)
                    </span>
                  </h2>
                  <p className="italic font-semibold text-textgray">
                    BS Computer Science
                  </p>
                  <p className="italic text-textgray pl-4">
                    – Dean’s Lister (2022 – Present)
                  </p>
                </div>

                <div>
                  <h2 className="font-bold text-xl text-rusty">
                    Secondary – STI Malolos
                    <span className="text-textgray font-medium">
                      {" "}
                      (2020 – 2022)
                    </span>
                  </h2>
                  <p className="italic font-semibold text-textgray">
                    STEM Track
                  </p>
                  <p className="italic text-textgray pl-4">
                    – Best Presenter, Product Presentation Champion
                  </p>
                  <p className="italic text-textgray pl-4">
                    – With High Honors
                  </p>
                </div>
              </div>
            )}

            {/* LEADERSHIP */}
            {activeTab === "leadership" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-bold text-lg text-rusty">
                    Computer Students Society
                    <span className="text-textgray font-medium">
                      {" "}
                      (2022 – 2023)
                    </span>
                  </h2>
                  <p className="italic font-semibold text-textgray">
                    Public Information Officer
                  </p>
                  <p className="italic text-textgray pl-4 text-sm">
                    – Managed Social Media Contents for the organization
                    Facebook page (DHVSU – Computer Students Society)
                  </p>
                </div>

                <div>
                  <h2 className="font-bold text-lg text-rusty">
                    Collge of Computing Studies Student Council (CCSSC)
                    <span className="text-textgray font-medium">
                      {" "}
                      (2022 – 2024)
                    </span>
                  </h2>
                  <p className="italic font-semibold text-textgray">
                    Board Member in Gender and Development (BM on GAD)
                  </p>
                  <p className="italic text-textgray pl-4 text-sm">
                    – Applied strategic planning of Gender and Development
                    initiatives that promote inclusiveness and representation in
                    computing and technology-related fields
                  </p>
                  <p className="italic text-textgray pl-4 text-sm">
                    – Awarded as Outstanding Student GADvocate
                  </p>
                  <p className="italic text-textgray pl-4">
                    – Leadership Award (2023 – 2024)
                  </p>
                  <p className="italic text-textgray pl-4 text-sm">
                    – Recognized for contribution and compliance for the Peace
                    and Development Campaign of Don Honorio Ventura State
                    University (2023 -2024)
                  </p>
                </div>

                <div>
                  <h2 className="font-bold text-lg text-rusty">
                    College of Computing Studies Gender and Development
                    Committee
                    <span className="text-textgray font-medium">
                      {" "}
                      (2022 – 2024)
                    </span>
                  </h2>
                  <p className="italic font-semibold text-textgray">
                    Head Director
                  </p>
                  <p className="italic text-textgray pl-4 text-sm">
                    – Provided strategic leadership to the GAD Committee by
                    setting goals, managing timelines, and delegating tasks to
                    ensure effective execution of advocacy initiatives.
                  </p>
                </div>
              </div>
            )}

            {/* CONTACTS */}
            {activeTab === "contacts" && (
              <div className="flex flex-col gap-5">
                <p className="font-cherry text-2xl text-royalpink">
                  Let’s work together!
                </p>

                <div className="flex items-center gap-4">
                  <Phone className="text-royalpink" />
                  <span>+63 921 745 3908</span>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-royalpink" />
                  <span>ifatiffany@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <Facebook className="text-royalpink" />
                  <span>facebook.com/ifadlrs</span>
                </div>

                <div className="flex items-center gap-4">
                  <Instagram className="text-royalpink" />
                  <span>instagram.com/ifadlcrz</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
