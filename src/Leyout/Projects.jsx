import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { ColorContext } from "../Color/ColorContext";

const Projects = () => {
  const { colors } = useContext(ColorContext);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://my-final-portfolio-server.vercel.app/projects") 
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section
      id="projects"
      className="py-16"
      style={{ background: colors.background, color: colors.text }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-12 text-center"
          style={{ color: colors.primary }}
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
              style={{ background: colors.secondary }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 flex flex-col items-center">
                <h3
                  className="text-2xl font-semibold mb-4 text-center"
                  style={{ color: colors.accent }}
                >
                  {project.title}
                </h3>

                <button
                  onClick={() => navigate(`/projectdetails/${project._id}`)}
                  style={{
                    background: colors.primary,
                    color: colors.background,
                    borderRadius: "999px",
                    padding: "0.5rem 1.2rem",
                    fontWeight: "bold",
                    boxShadow: `0 2px 8px ${colors.secondary}55`,
                    transition: "background 0.3s, color 0.3s",
                  }}
                  className="hover:bg-[var(--color-accent)] hover:text-white transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
