import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { ColorContext } from "../Color/ColorContext";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineSave,
} from "react-icons/ai";

const Projectupdate = () => {
  const { colors } = useContext(ColorContext);
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [loading, setLoading] = useState(false);

  const loadProject = async () => {
    const res = await fetch(`http://localhost:3000/projects/${id}`);
    const data = await res.json();
    setProject(data);
  };

  useEffect(() => {
    loadProject();
  }, []);

  const handleUpdate = async (field, value, index = null) => {
    setLoading(true);

    let updatedData = {};
    if (index !== null) {
      let updatedArray = [...project[field]];
      updatedArray[index] = value;
      updatedData[field] = updatedArray;
    } else {
      updatedData[field] = value;
    }

    await fetch(`http://localhost:3000/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    setLoading(false);
    setEditingField(null);
    loadProject();
  };

  const handleDelete = async (field, index) => {
    setLoading(true);

    let updatedArray = project[field].filter((_, i) => i !== index);
    let updatedData = { [field]: updatedArray };

    await fetch(`http://localhost:3000/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    setLoading(false);
    loadProject();
  };

  const handleAdd = async (field, value) => {
    if (!value.trim()) return;
    setLoading(true);

    const updatedArray = [...(project[field] || []), value];
    const updatedData = { [field]: updatedArray };

    await fetch(`http://localhost:3000/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    setLoading(false);
    setEditingField(null);
    setTempValue("");
    loadProject();
  };

  if (!project)
    return (
      <p
        className="p-6"
        style={{ color: colors.text, backgroundColor: colors.background }}
      >
        Loading project...
      </p>
    );

  return (
    <div
      className="max-w-4xl mx-auto p-6 shadow rounded"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      {/* Image */}
      <div className="mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover rounded mb-2"
        />
        {editingField === "image" ? (
          <div className="flex gap-2 items-center">
            <input
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="border p-2 rounded w-full"
              style={{ borderColor: colors.primary }}
            />
            <button
              onClick={() => handleUpdate("image", tempValue)}
              className="btn btn-primary"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <AiOutlineSave />
              )}
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setEditingField("image");
              setTempValue(project.image);
            }}
            className="btn btn-accent"
          >
            <AiOutlineEdit />
          </button>
        )}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
        {editingField === "title" ? (
          <>
            <input
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="border p-2 rounded w-full"
              style={{ borderColor: colors.primary }}
            />
            <button
              onClick={() => handleUpdate("title", tempValue)}
              className="btn btn-primary"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <AiOutlineSave />
              )}
            </button>
          </>
        ) : (
          <>
            <span style={{ color: colors.primary }}>{project.title}</span>
            <button
              onClick={() => {
                setEditingField("title");
                setTempValue(project.title);
              }}
              className="btn btn-accent btn-sm"
            >
              <AiOutlineEdit />
            </button>
          </>
        )}
      </h2>

      {/* Live Link */}
      <div className="mb-4">
        <h3 className="font-bold mb-2" style={{ color: colors.accent }}>
          Live Link
        </h3>
        {editingField === "liveLink" ? (
          <div className="flex gap-2">
            <input
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <button
              onClick={() => handleUpdate("liveLink", tempValue)}
              className="btn btn-primary btn-sm"
            >
              {loading ? <span className="loading loading-spinner"></span> : <AiOutlineSave />}
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {project.liveLink}
            </a>
            <button
              onClick={() => {
                setEditingField("liveLink");
                setTempValue(project.liveLink);
              }}
              className="btn btn-accent btn-sm"
            >
              <AiOutlineEdit />
            </button>
          </div>
        )}
      </div>

      {/* GitHub Links */}
      {["frontendGit", "backendGit"].map((field) => (
        <div key={field} className="mb-4">
          <h3 className="font-bold mb-2" style={{ color: colors.accent }}>
            {field === "frontendGit" ? "Frontend GitHub" : "Backend GitHub"}
          </h3>
          {editingField === field ? (
            <div className="flex gap-2">
              <input
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <button
                onClick={() => handleUpdate(field, tempValue)}
                className="btn btn-primary btn-sm"
              >
                {loading ? <span className="loading loading-spinner"></span> : <AiOutlineSave />}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <a
                href={project[field]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {project[field]}
              </a>
              <button
                onClick={() => {
                  setEditingField(field);
                  setTempValue(project[field]);
                }}
                className="btn btn-accent btn-sm"
              >
                <AiOutlineEdit />
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Description */}
      <div className="mb-4">
        <h3 className="font-bold mb-2" style={{ color: colors.accent }}>
          Description
        </h3>
        {editingField === "description" ? (
          <div className="flex flex-col gap-2">
            <textarea
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="border p-2 rounded w-full h-24"
              style={{ borderColor: colors.primary }}
            />
            <button
              onClick={() => handleUpdate("description", tempValue)}
              className="btn btn-primary"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <AiOutlineSave />
              )}
            </button>
          </div>
        ) : (
          <div className="flex items-start gap-2">
            <p className="flex-1">{project.description}</p>
            <button
              onClick={() => {
                setEditingField("description");
                setTempValue(project.description);
              }}
              className="btn btn-accent btn-sm"
            >
              <AiOutlineEdit />
            </button>
          </div>
        )}
      </div>

      {/* Array Fields */}
      {["frontendTech", "backendTech", "features", "challenges"].map(
        (field) => (
          <div key={field} className="mt-4">
            <h3
              className="font-bold mb-2 capitalize flex items-center gap-2"
              style={{ color: colors.accent }}
            >
              {field}
              <button
                onClick={() => {
                  setEditingField(`${field}-add`);
                  setTempValue("");
                }}
                className="btn btn-success btn-sm"
              >
                <AiOutlinePlus />
              </button>
            </h3>

            <ul className="list-disc list-inside">
              {project[field]?.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  {editingField === `${field}-${i}` ? (
                    <>
                      <input
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="border p-1 rounded"
                        style={{ borderColor: colors.primary }}
                      />
                      <button
                        onClick={() => handleUpdate(field, tempValue, i)}
                        className="btn btn-primary btn-sm"
                      >
                        {loading ? (
                          <span className="loading loading-spinner"></span>
                        ) : (
                          <AiOutlineSave />
                        )}
                      </button>
                    </>
                  ) : (
                    <>
                      {item}
                      <button
                        onClick={() => {
                          setEditingField(`${field}-${i}`);
                          setTempValue(item);
                        }}
                        className="btn btn-accent btn-sm"
                      >
                        <AiOutlineEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(field, i)}
                        className="btn btn-error btn-sm"
                      >
                        <AiOutlineDelete />
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>

            {/* Add New Item */}
            {editingField === `${field}-add` && (
              <div className="flex gap-2 mt-2">
                <input
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="border p-1 rounded"
                  style={{ borderColor: colors.primary }}
                />
                <button
                  onClick={() => handleAdd(field, tempValue)}
                  className="btn btn-success btn-sm"
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    <AiOutlineSave />
                  )}
                </button>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Projectupdate;
