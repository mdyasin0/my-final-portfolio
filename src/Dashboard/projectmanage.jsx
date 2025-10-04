import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import DynamicInputList from "./DynamicInputList";
import { ColorContext } from "../Color/ColorContext";

const ProjectsDashboard = () => {
  const { colors } = useContext(ColorContext); // Color context
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [frontendGit, setFrontendGit] = useState("");
  const [backendGit, setBackendGit] = useState("");

  const [frontendTech, setFrontendTech] = useState([""]);
  const [backendTech, setBackendTech] = useState([""]);
  const [features, setFeatures] = useState([""]);
  const [challenges, setChallenges] = useState([""]);
  const [description, setDescription] = useState("");

  const loadProjects = async () => {
    const res = await fetch("http://localhost:3000/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newProject = {
      title,
      image,
      liveLink,
      frontendGit,
      backendGit,
      frontendTech,
      backendTech,
      description,
      features,
      challenges,
    };

    await fetch("http://localhost:3000/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });

    setLoading(false);
    alert(" Project Added!");
    loadProjects();

    setTitle("");
    setImage("");
    setLiveLink("");
    setFrontendGit("");
    setBackendGit("");
    setFrontendTech([""]);
    setBackendTech([""]);
    setFeatures([""]);
    setChallenges([""]);
    setDescription("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    await fetch(`http://localhost:3000/projects/${id}`, { method: "DELETE" });
    loadProjects();
  };

  return (
    <div
      style={{
        background: colors.background,
        color: colors.text,
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h2
        className="text-3xl font-bold mb-6"
        style={{ color: colors.primary }}
      >
        Projects Dashboard
      </h2>

      {/* Add Project Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: colors.secondary,
          padding: "1.5rem",
          borderRadius: "1rem",
        }}
      >
        <h3 style={{ color: colors.accent, fontSize: "1.5rem", marginBottom: "1rem" }}>
          Add New Project
        </h3>

        {[
          { label: "Title", value: title, setter: setTitle },
          { label: "Image URL", value: image, setter: setImage },
          { label: "Live Link", value: liveLink, setter: setLiveLink },
          { label: "Frontend GitHub Link", value: frontendGit, setter: setFrontendGit },
          { label: "Backend GitHub Link", value: backendGit, setter: setBackendGit },
        ].map((input, i) => (
          <input
            key={i}
            type="text"
            placeholder={input.label}
            value={input.value}
            onChange={(e) => input.setter(e.target.value)}
            style={{
              border: `2px solid ${colors.primary}`,
              padding: "0.5rem",
              borderRadius: "0.5rem",
              width: "100%",
              marginBottom: "1rem",
              background: colors.background,
              color: colors.text,
            }}
          />
        ))}

        <DynamicInputList
          label="Frontend Technologies"
          values={frontendTech}
          setValues={setFrontendTech}
          addMoreColor={colors.accent}
        />
        <DynamicInputList
          label="Backend Technologies"
          values={backendTech}
          setValues={setBackendTech}
          addMoreColor={colors.accent}
        />
        <DynamicInputList
          label="Features"
          values={features}
          setValues={setFeatures}
          addMoreColor={colors.accent}
        />
        <DynamicInputList
          label="Challenges"
          values={challenges}
          setValues={setChallenges}
          addMoreColor={colors.accent}
        />

      <textarea
  placeholder="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  style={{
    border: `2px solid ${colors.primary}`,
    padding: "0.5rem",
    borderRadius: "0.5rem",
    width: "100%",
    marginBottom: "1rem",
    background: colors.background,
    color: colors.text,
  }}
/>


        <button
          type="submit"
          disabled={loading}
          style={{
            background: colors.primary,
            color: colors.background,
            padding: "0.5rem 1rem",
            fontWeight: "bold",
            borderRadius: "0.5rem",
          }}
        >
          {loading ? "Adding..." : "Add Project"}
        </button>
      </form>

      {/* Projects List */}
      <h3 style={{ color: colors.accent, fontSize: "1.5rem", margin: "2rem 0 1rem" }}>
        All Projects
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p._id}
            style={{
              background: colors.background,
              color: colors.text,
              border: `2px solid ${colors.primary}`,
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <Link to={`/dashboardlayout/projectsdashboard/${p._id}`}>
              <img
                src={p.image}
                alt={p.title}
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "0.5rem" }}
              />
              <h4 style={{ color: colors.primary, marginTop: "1rem" }}>
                {p.title}
              </h4>
            </Link>

            <p style={{ color: colors.text }}>
              {p.description?.slice(0, 100)}...
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() =>
                  navigate(`/dashboardlayout/projectsdashboard/${p._id}`)
                }
                style={{
                  background: colors.accent,
                  color: colors.background,
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(p._id)}
                style={{
                  background: colors.secondary,
                  color: colors.background,
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsDashboard;
