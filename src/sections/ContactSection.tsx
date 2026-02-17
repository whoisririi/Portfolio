import React, { useState } from "react";
import ContactImg from "../assets/images/Contact.jpg";

const ContactSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "136fc5a0-60ea-42a4-b54e-eae3e3354d71");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      form.reset();
      setShowModal(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
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

            <form onSubmit={onSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm outline-none border border-transparent focus:border-[#C97C8A] focus:ring-2 focus:ring-[#F3C6CF] transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm outline-none border border-transparent focus:border-[#C97C8A] focus:ring-2 focus:ring-[#F3C6CF] transition"
              />

              <textarea
                rows={4}
                name="message"
                placeholder="Your message..."
                required
                className="w-full bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm outline-none border border-transparent focus:border-[#C97C8A] focus:ring-2 focus:ring-[#F3C6CF] transition resize-none"
              />

              <button
                type="submit"
                className="w-full bg-lightpink text-[#5a4c51] outline-[#CE6B8B] text-xl font-semibold font-cherry tracking-[0.3em] py-3 rounded-xl shadow-md hover:bg-royalpink hover:text-white hover:outline-dirtywhite hover:outline-2 active:scale-[0.98] transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact illustration*/}
          <div className="hidden md:flex justify-center">
            <div className="rounded-3xl">
              <img
                src={ContactImg}
                alt="Contact Illustration"
                className="w-[344px] h-[344px] mt-[130px] shadow-lg rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center animate-fadeIn">
            <h3 className="text-2xl font-bold text-royalpink mb-4">
              💌 Message Sent!
            </h3>

            <p className="text-textgray mb-6">
              Thank you for reaching out. I’ll get back to you as soon as
              possible!
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-royalpink text-white px-6 py-2 rounded-xl font-semibold hover:bg-lightpink hover:text-[#5a4c51] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;
