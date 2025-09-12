import React, { useContext, useState } from "react";
import { ColorContext } from "../Color/ColorContext";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  const { colors } = useContext(ColorContext);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Message sent:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16"
      style={{ background: colors.background, color: colors.text }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-6 text-center"
          style={{ color: colors.primary }}
        >
          Contact Me
        </h2>
        <p className="text-center mb-10 text-lg" style={{ color: colors.accent }}>
          I’m open to discuss your projects or collaboration opportunities. Reach out to me!
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              style={{ background: colors.background, color: colors.text, borderColor: colors.primary }}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              style={{ background: colors.background, color: colors.text, borderColor: colors.primary }}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              required
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              style={{ background: colors.background, color: colors.text, borderColor: colors.primary }}
            ></textarea>
            <button
              type="submit"
              className="py-3 px-6 rounded-full font-bold hover:scale-105 transition transform"
              style={{ background: colors.primary, color: colors.background }}
            >
              Send Message
            </button>
            {submitted && <p className="text-green-500 mt-2">Message sent successfully!</p>}
          </form>

          {/* Social Media */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: colors.accent }}
            >
              Connect with me
            </h3>
            <div className="flex gap-5 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary }} className="hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary }} className="hover:text-blue-400 transition">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary }} className="hover:text-blue-700 transition">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary }} className="hover:text-gray-700 transition">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
