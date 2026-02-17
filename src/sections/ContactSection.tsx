import React from "react";
import ContactImg from "../assets/images/Contact.jpg";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-dirtywhite flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[44px] font-extrabold text-royalpink font-source">
            Want to stay in touch?
          </h2>
          <p className="text-textgray mb-8 font-source font-bold">
            I’d love to hear from you!
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your name"
              className="w-full backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm outline-none border border-transparent focus:border-[#C97C8A] focus:ring-2 focus:ring-[#F3C6CF] transition"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm outline-none border border-transparent focus:border-[#C97C8A] focus:ring-2 focus:ring-[#F3C6CF] transition"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm outline-none border border-transparent focus:border-[#C97C8A] focus:ring-2 focus:ring-[#F3C6CF] transition"
            />

            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm outline-none border border-transparent focus:border-[#C97C8A] focus:ring-2 focus:ring-[#F3C6CF] transition resize-none"
            />

            {/* TO REVISE*/}
            <button
              type="button"
              className="w-full bg-lightpink text-[#5a4c51] outline-[#CE6B8B] text-xl font-semibold font-cherry tracking-[0.3em] py-3 rounded-xl shadow-md hover:bg-royalpink hover:text-white hover:outline-dirtywhite hover:outline-2 active:scale-[0.98] transition-all duration-200"
            >
              Send message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - IMAGE / ILLUSTRATION */}
        <div className="hidden md:flex justify-center">
          <div className="rounded-3xl">
            <img
              src={ContactImg}
              alt="Contact Illustration"
              className="w-[413px] h-[413px] mt-[130px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
