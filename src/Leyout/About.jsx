import React, { useContext, useState, useEffect } from "react";
import { ColorContext } from "../Color/ColorContext";
import { IoIosCloseCircle } from "react-icons/io";

function About() {
  const { colors } = useContext(ColorContext);
  const [showModal, setShowModal] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <section
      id="about"
      style={{
        background: colors.background,
        color: colors.text,
        transition: "background 0.3s, color 0.3s",
        padding: "4rem 0"
      }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Profile Image with Creative Frame */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <div
            className="p-3 bg-gradient-to-tr from-[var(--color-accent)] via-[var(--color-primary)] to-[var(--color-secondary)] shadow-2xl 
                       rounded-tl-[80px] rounded-br-[80px] overflow-hidden"
            style={{
              border: `4px solid ${colors.primary}`,
              maxWidth: "400px"
            }}
          >
            <img
              src="src/assets/myimage.png"
              alt="MD Yasin"
              className="object-cover w-full h-[420px] rounded-tl-[70px] rounded-br-[70px] shadow-lg"
            />
          </div>
        </div>

        {/* Right: About Content */}
        <div className="w-full md:w-1/2">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            About Me
          </h2>
          <h3
            className="text-xl md:text-2xl font-semibold mb-6"
            style={{ color: colors.accent }}
          >
            MERN Stack Developer | Problem Solver | Tech Enthusiast
          </h3>
          <p
            className="leading-relaxed text-lg mb-6"
            style={{ color: colors.text }}
          >
            Hey there! I’m <span style={{ color: colors.primary, fontWeight: "bold" }}>MD Yasin</span>, 
            a passionate MERN Stack Developer based in Dhaka, Bangladesh. I have explored and mastered technologies like 
            <span style={{ color: colors.accent, fontWeight: "500" }}> HTML, CSS, Tailwind CSS, JavaScript, React.js, Firebase, Node.js, Express.js, and MongoDB</span>.  
            <br /><br />
            I love turning ideas into fully functional, responsive, and visually appealing web applications — whether it’s an e-commerce platform, a service-based website, or a clean, effective landing page.  
            <br /><br />
            My goal is to build scalable, high-performance solutions that not only work seamlessly but also deliver a great user experience.  
            <br /><br />
            <span style={{ color: colors.secondary, fontWeight: "600" }}>
              Let’s collaborate and create something awesome together!
            </span>
          </p>

          {/* Certificate & Blog Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowModal(true)}
              style={{
                background: colors.primary,
                color: colors.background,
                borderRadius: "999px",
                padding: "0.6rem 1.5rem",
                fontWeight: "bold",
                boxShadow: `0 2px 8px ${colors.secondary}55`,
                transition: "background 0.3s, color 0.3s"
              }}
              className="hover:bg-[var(--color-accent)] hover:text-white transition"
            >
               View My Certificate
            </button>

            <a
              href="/blog/programming-hero-experience"
              style={{
                background: colors.accent,
                color: colors.background,
                borderRadius: "999px",
                padding: "0.6rem 1.5rem",
                fontWeight: "bold",
                boxShadow: `0 2px 8px ${colors.secondary}55`,
                transition: "background 0.3s, color 0.3s"
              }}
              className="hover:bg-[var(--color-primary)] hover:text-white transition text-center"
            >
              Know About Programming Hero?
            </a>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-6">
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 max-w-3xl w-full relative max-h-[90vh] overflow-y-auto"
            style={{ background: colors.background, color: colors.text }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-2xl font-bold"
              style={{ color: colors.accent }}
            >
         <IoIosCloseCircle />
            </button>

            <h2
              className="text-2xl font-bold mb-4 text-center"
              style={{ color: colors.primary }}
            >
              My Certificate
            </h2>

            <img
              src="src/assets/certificate (1).jpg"
              alt="Certificate"
              className="w-full rounded-xl shadow-lg border-2"
              style={{ borderColor: colors.primary }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
