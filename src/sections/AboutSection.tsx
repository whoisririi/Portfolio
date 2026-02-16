import { MapPin, Mail, Phone } from "lucide-react";
import aboutImg from "../assets/images/aboutimg.jpg";

//image part
const placeholderImage =
  "https://via.placeholder.com/300x380.png?text=Your+Photo";

const AboutSection = () => {
  return (
    <section className="w-full bg-lightpink px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          {/* HELLO TITLE */}
          <h1 className="text-6xl sm:text-7xl font-cherry text-dirtygold">
            Hello!
          </h1>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg text-rusty font-candal leading-relaxed max-w-xl">
            I am a creative Computer Science student specializing in UI/UX
            design and front-end development. Currently a 4th year student at
            Pampanga State University. I have experience designing responsive
            web interfaces and leading student organizations, with a passion for
            user-centered digital experiences.
          </p>

          {/* HIGHLIGHT TEXT */}
          <div>
            <p className="font-source font-bold text-dirtygold text-lg">
              Want to get to know me more?
            </p>
            <p className="font-source text-dirtygold font-bold text-lg">
              Check this out!
            </p>
          </div>

          {/* RESUME BUTTON */}
          <button className="w-fit px-6 py-2 border border-royalpink text-royalpink rounded-full font-source font-semibold hover:bg-royalpink hover:text-white transition">
            Resume
          </button>
        </div>

        {/* RIGHT SIDE - PROFILE CARD */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm">
          {/* PHOTO */}
          <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-5">
            <img
              src={aboutImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* NAME */}
          <div className="mb-4">
            <h2 className="font-source font-bold text-lg text-[#404030]">
              Ifa Dela Rosa{" "}
              <span className="font-normal text-sm text-gray-500">she/her</span>
            </h2>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-3 text-sm text-[#404030] mb-2">
            <MapPin size={18} />
            <span>Mexico, Pampanga</span>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-3 text-sm text-[#404030] mb-2">
            <Mail size={18} />
            <span>ifatiffany@gmail.com</span>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-3 text-sm text-[#404030]">
            <Phone size={18} />
            <span>+63 921 745 3908</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
