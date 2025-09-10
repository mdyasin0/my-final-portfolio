import React, { useContext } from "react";
import { ColorContext } from "../Color/ColorContext";

function Hero() {
  const { colors } = useContext(ColorContext);

  return (
    <section
      style={{
        background: colors.background,
        color: colors.text,
        minHeight: "70vh",
        transition: "background 0.3s, color 0.3s",
        padding: "2rem 0"
      }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center  justify-between py-10">
        {/* Left: Text */}
        <div className="max-w-xl">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Hi, I'm MD Yasin
          </h1>
          <h2
            className="text-2xl md:text-3xl font-semibold mb-6"
            style={{ color: colors.accent }}
          >
            MERN Stack Developer
          </h2>
          <p className="mb-8 text-lg" style={{ color: colors.text }}>
            I craft dynamic and user-friendly web applications with the MERN stack, delivering efficient and scalable solutions that help businesses thrive online.
          </p>
          <a
            href="#contact"
            style={{
              background: colors.primary,
              color: colors.background,
              borderRadius: "999px",
              padding: "0.75rem 2rem",
              fontWeight: "bold",
              textDecoration: "none",
              boxShadow: `0 2px 8px ${colors.secondary}55`,
              transition: "background 0.3s, color 0.3s"
            }}
            className="hover:bg-[var(--color-accent)] hover:text-white transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center items-center">
          <div
            className="p-2 rounded-bl-[50%] bg-gradient-to-tr from-[var(--color-accent)] via-[var(--color-primary)] to-[var(--color-secondary)] shadow-xl "
            style={{ border: `4px solid ${colors.primary}` }}
          >
            <img
              src="src/assets/myimage.png"
              alt="MD Yasin"
              className=" rounded-bl-[50%] w-68 h-68 object-cover border-4  shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;