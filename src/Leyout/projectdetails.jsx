import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { ColorContext } from "../Color/ColorContext";

const ProjectDetails = () => {
  const { colors } = useContext(ColorContext);
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`https://my-final-portfolio-server.vercel.app/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.error("Error fetching project:", err));
  }, [id]);

  if (!project)
    return (
      <p
        className="p-6 text-center text-lg"
        style={{ color: colors.text, backgroundColor: colors.background }}
      >
        Loading project...
      </p>
    );

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        minHeight: "100vh",
      }}
    >
      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto p-6">
        {/* IMAGE */}
        <div className="mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* TITLE */}
        <h1
          className="text-4xl font-bold mb-6 text-center"
          style={{ color: colors.primary }}
        >
          {project.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="mb-6 text-lg leading-relaxed">{project.description}</p>

        {/* FRONTEND TECH */}
        {project.frontendTech?.length > 0 && (
          <div className="mb-10">
            <h3
              className="text-3xl font-semibold mb-4 text-center"
              style={{ color: colors.accent }}
            >
              Frontend Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {project.frontendTech.map((tech, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl shadow-md text-center font-medium"
                  style={{
                    backgroundColor: colors.cardBg || colors.primary + "20",
                    border: `1px solid ${colors.primary}`,
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BACKEND TECH */}
        {project.backendTech?.length > 0 && (
          <div className="mb-10">
            <h3
              className="text-3xl font-semibold mb-4 text-center"
              style={{ color: colors.accent }}
            >
              Backend Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {project.backendTech.map((tech, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl shadow-md text-center font-medium"
                  style={{
                    backgroundColor: colors.cardBg || colors.secondary + "20",
                    border: `1px solid ${colors.secondary}`,
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BUTTON LINKS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg font-bold transition hover:opacity-90"
              style={{
                backgroundColor: colors.primary,
                color: colors.background,
              }}
            >
              Live
            </a>
          )}

          {project.frontendGit && (
            <a
              href={project.frontendGit}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg font-bold transition hover:opacity-90"
              style={{
                backgroundColor: colors.accent,
                color: colors.background,
              }}
            >
              Frontend
            </a>
          )}

          {project.backendGit && (
            <a
              href={project.backendGit}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg font-bold transition hover:opacity-90"
              style={{
                backgroundColor: colors.secondary,
                color: colors.background,
              }}
            >
              Backend
            </a>
          )}
        </div>

       {/* FEATURES & CHALLENGES */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-wrap break-words">
  {project.features?.length > 0 && (
    <div className="break-words">
      <h3
        className="text-2xl font-semibold mb-2"
        style={{ color: colors.accent }}
      >
        Features
      </h3>
      <ul className="list-disc list-inside space-y-1 break-words">
        {project.features.map((feature, i) => (
          <li key={i} className="break-words whitespace-normal">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )}

  {project.challenges?.length > 0 && (
    <div className="break-words">
      <h3
        className="text-2xl font-semibold mb-2"
        style={{ color: colors.accent }}
      >
        Challenges
      </h3>
      <ul className="list-disc list-inside space-y-1 break-words">
        {project.challenges.map((challenge, i) => (
          <li key={i} className="break-words whitespace-normal">
            {challenge}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

      </div>
    </div>
  );
};

export default ProjectDetails;
