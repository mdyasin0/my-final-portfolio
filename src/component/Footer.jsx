import React, { useContext } from "react";
import { ColorContext } from "../Color/ColorContext";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  const { colors } = useContext(ColorContext);

  return (
    <footer
      style={{
        background: colors.background,
        color: colors.text,
        borderTop: `2px solid ${colors.primary}`,
        transition: "all 0.3s",
      }}
      className="py-8"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h2
            className="text-2xl font-bold"
            style={{ color: colors.primary }}
          >
            MD Yasin
          </h2>
          <p className="text-sm" style={{ color: colors.accent }}>
            MERN Stack Developer
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.primary }}
            className="hover:text-[var(--color-accent)] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.primary }}
            className="hover:text-[var(--color-accent)] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.primary }}
            className="hover:text-[var(--color-accent)] transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.primary }}
            className="hover:text-[var(--color-accent)] transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-xs" style={{ color: colors.text }}>
        © {new Date().getFullYear()} MD Yasin. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
