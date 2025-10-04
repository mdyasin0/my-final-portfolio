import React, { useContext, useState, useEffect, useRef } from "react";
import { ColorContext } from "../Color/ColorContext";
import { NavLink } from "react-router";

function Navbar() {
  const { colors, theme, toggleTheme } = useContext(ColorContext);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0); // useRef keeps value without re-render
  const [resumeLink, setResumeLink] = useState(""); // state for resume

  // fetch resume link from backend
  useEffect(() => {
    fetch("http://localhost:3000/resume")
      .then((res) => res.json())
      .then((data) => {
        if (data?.link) {
          setResumeLink(data.link);
        }
      })
      .catch((err) => console.error("Error fetching resume link:", err));
  }, []);
  const getLinkStyle = ({ isActive }) => ({
    color: isActive ? colors.accent : colors.text,
    fontWeight: isActive ? "bold" : "normal",
    borderBottom: isActive ? `2px solid ${colors.accent}` : "none",
    transition: "color 0.3s, border-bottom 0.3s"
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY.current + 10) {
            setHidden(true); // scroll down → hide
          } else if (currentScrollY < lastScrollY.current - 10) {
            setHidden(false); // scroll up → show
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        borderBottom: `2px solid ${colors.primary}`,
        transition: "background 0.3s, color 0.3s, transform 0.4s ease-in-out" // smoother
      }}
      className={`shadow-lg fixed w-full z-50 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-wide" style={{ color: colors.primary }}>
          MD Yasin
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          <li><NavLink to="/hero" style={getLinkStyle} className="hover:text-[var(--color-accent)] transition" end>Home</NavLink></li>
          <li><NavLink to="/DashboardLayout" style={getLinkStyle} className="hover:text-[var(--color-accent)] transition">Dashboard</NavLink></li>
          <li><NavLink to="/skills" style={getLinkStyle} className="hover:text-[var(--color-accent)] transition">Skills</NavLink></li>
          <li><NavLink to="/projects" style={getLinkStyle} className="hover:text-[var(--color-accent)] transition">Projects</NavLink></li>
          <li><NavLink to="/about" style={getLinkStyle} className="hover:text-[var(--color-accent)] transition">About</NavLink></li>
          <li><NavLink to="/contact" style={getLinkStyle} className="hover:text-[var(--color-accent)] transition">Contact</NavLink></li>
        </ul>

          {/* Resume & Theme */}
        <div className="flex items-center gap-4">
          {resumeLink && (
            <a
              href={resumeLink} // backend থেকে আসা link use হচ্ছে এখানে
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: colors.primary,
                color: colors.background,
                borderRadius: "999px",
                padding: "0.5rem 1.2rem",
                fontWeight: "bold",
                boxShadow: `0 2px 8px ${colors.secondary}55`,
                border: "none",
                textDecoration: "none",
                transition: "background 0.3s, color 0.3s"
              }}
              className="hover:bg-[var(--color-accent)] hover:text-white transition"
            >
              My Resume
            </a>
          )}

          <button
            onClick={toggleTheme}
            style={{
              background: colors.accent,
              color: colors.background,
              borderRadius: "999px",
              padding: "0.5rem 1rem",
              border: "none",
              fontWeight: "bold",
              boxShadow: `0 2px 8px ${colors.secondary}55`,
              transition: "background 0.3s, color 0.3s"
            }}
            className="hover:bg-[var(--color-primary)] hover:text-white transition"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
