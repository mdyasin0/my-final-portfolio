// Skills.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ColorContext } from "../Color/ColorContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaJsSquare
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVite } from "react-icons/si";

const Skills = () => {
  const { colors } = useContext(ColorContext);
  const navigate = useNavigate();

  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, blogRoute: "/bloglayout/html" },
        { name: "CSS", icon: <FaCss3Alt />, blogRoute: "/bloglayout/css" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, blogRoute: "/bloglayout/tailwind-css" },
        { name: "JavaScript", icon: <FaJsSquare />, blogRoute: "/bloglayout/javascript" },
        { name: "React", icon: <FaReact />, blogRoute: "/bloglayout/react" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, blogRoute: "/bloglayout/node.js" },
        { name: "Express.js", icon: <SiExpress />, blogRoute: "/bloglayout/express.js" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, blogRoute: "/bloglayout/mongodb" }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Firebase", icon: <SiFirebase />, blogRoute: "/bloglayout/firebase" },
        { name: "Git", icon: <FaGitAlt />, blogRoute: "/bloglayout/git" },
        { name: "Vite", icon: <SiVite />, blogRoute: "/bloglayout/vite" }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-16"
      style={{ background: colors.background, color: colors.text }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-12 text-center"
          style={{ color: colors.primary }}
        >
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skillsData.map((section) => (
            <div
              key={section.category}
              className="p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              style={{ background: colors.secondary }}
            >
              <h3
                className="text-2xl font-semibold mb-6 text-center"
                style={{ color: colors.accent }}
              >
                {section.category}
              </h3>
              <ul className="flex flex-col gap-4 items-center">
                {section.skills.map((skill) => (
                  <li
                    key={skill.name}
                    onClick={() => navigate(skill.blogRoute)}
                    className="flex items-center gap-3 px-4 py-2 rounded-full font-medium text-lg cursor-pointer hover:scale-110 transform transition"
                    style={{ background: colors.primary, color: colors.background }}
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
