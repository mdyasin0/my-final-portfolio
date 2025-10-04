import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { ColorContext } from "../Color/ColorContext";

const ProjectDetails = () => {
  const { colors } = useContext(ColorContext);
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
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
    <div style={{ backgroundColor: colors.background, width: "100%" }}>
      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto p-6 shadow-xl rounded-lg">
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

        {/* BUTTON LINKS */}
        <div className="flex flex-col gap-4 mb-8">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg text-center font-bold transition hover:opacity-90"
              style={{
                backgroundColor: colors.primary,
                color: colors.background,
              }}
            >
              View Live Project
            </a>
          )}

          {project.frontendGit && (
            <a
              href={project.frontendGit}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg text-center font-bold transition hover:opacity-90"
              style={{
                backgroundColor: colors.accent,
                color: colors.background,
              }}
            >
              View Frontend Code
            </a>
          )}

          {project.backendGit && (
            <a
              href={project.backendGit}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg text-center font-bold transition hover:opacity-90"
              style={{
                backgroundColor: colors.secondary,
                color: colors.background,
              }}
            >
              View Backend Code
            </a>
          )}
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.features?.length > 0 && (
            <div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: colors.accent }}
              >
                Features
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges?.length > 0 && (
            <div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: colors.accent }}
              >
                Challenges
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {project.challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {project.backendTech?.length > 0 && (
            <div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: colors.accent }}
              >
                Backend Tech
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {project.backendTech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* FRONTEND TECH FULL WIDTH SECTION */}
      {project.frontendTech?.length > 0 && (
        <div
          className="w-full py-8"
          style={{ backgroundColor: colors.accent }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-4 text-white text-center">
              Frontend Technologies
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white text-lg">
              {project.frontendTech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
