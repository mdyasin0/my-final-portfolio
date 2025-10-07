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
    const res = await fetch(`https://my-final-portfolio-server.vercel.app/projects/${id}`);
    const data = await res.json();
    setProject(data);
  };

  useEffect(() => {
    loadProject();
  },);

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

    await fetch(`https://my-final-portfolio-server.vercel.app/projects/${id}`, {
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

    await fetch(`https://my-final-portfolio-server.vercel.app/projects/${id}`, {
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

    await fetch(`https://my-final-portfolio-server.vercel.app/projects/${id}`, {
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
          <div className="flex gap-2 items-center flex-wrap break-words">
            <input
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="border p-2 rounded w-full break-words"
              style={{ borderColor: colors.primary }}
            />
            <button
              onClick={() => handleUpdate("image", tempValue)}
              className="btn btn-primary"
            >
              {loading ? <span className="loading loading-spinner"></span> : <AiOutlineSave />}
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
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 flex-wrap break-words">
        {editingField === "title" ? (
          <>
            <input
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="border p-2 rounded w-full break-words whitespace-normal"
              style={{ borderColor: colors.primary }}
            />
            <button
              onClick={() => handleUpdate("title", tempValue)}
              className="btn btn-primary"
            >
              {loading ? <span className="loading loading-spinner"></span> : <AiOutlineSave />}
            </button>
          </>
        ) : (
          <>
            <span className="break-words whitespace-normal" style={{ color: colors.primary }}>
              {project.title}
            </span>
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

      {/* Description */}
      <div className="mb-4 break-words whitespace-normal">
        <h3 className="font-bold mb-2" style={{ color: colors.accent }}>
          Description
        </h3>
        {editingField === "description" ? (
          <div className="flex flex-col gap-2 flex-wrap break-words">
            <textarea
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="border p-2 rounded w-full h-24 break-words whitespace-normal"
              style={{ borderColor: colors.primary }}
            />
            <button
              onClick={() => handleUpdate("description", tempValue)}
              className="btn btn-primary"
            >
              {loading ? <span className="loading loading-spinner"></span> : <AiOutlineSave />}
            </button>
          </div>
        ) : (
          <div className="flex items-start gap-2 flex-wrap break-words">
            <p className="flex-1 break-words whitespace-normal">
              {project.description}
            </p>
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

      {/* 🔗 Live, Frontend & Backend Links */}
      {["liveLink", "frontendGit", "backendGit"].map((field) => (
        <div key={field} className="mb-4">
          <h3 className="font-bold mb-2 capitalize" style={{ color: colors.accent }}>
            {field}
          </h3>
          {editingField === field ? (
            <div className="flex gap-2 items-center flex-wrap break-words">
              <input
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="border p-2 rounded w-full break-words"
                style={{ borderColor: colors.primary }}
              />
              <button
                onClick={() => handleUpdate(field, tempValue)}
                className="btn btn-primary btn-sm"
              >
                {loading ? <span className="loading loading-spinner"></span> : <AiOutlineSave />}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 flex-wrap break-words">
              <a
                href={project[field]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline break-words"
              >
                {project[field] || "No link available"}
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

      {/* Array Fields */}
      {["frontendTech", "backendTech", "features", "challenges"].map((field) => (
        <div key={field} className="mt-4 break-words whitespace-normal">
          <h3
            className="font-bold mb-2 capitalize flex items-center gap-2 flex-wrap"
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

          <ul className="list-disc list-inside space-y-1 break-words whitespace-normal">
            {project[field]?.map((item, i) => (
              <li key={i} className="flex items-start gap-2 flex-wrap break-words whitespace-normal">
                {editingField === `${field}-${i}` ? (
                  <>
                    <input
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      className="border p-1 rounded flex-1 min-w-0 break-words whitespace-normal"
                      style={{ borderColor: colors.primary }}
                    />
                    <button
                      onClick={() => handleUpdate(field, tempValue, i)}
                      className="btn btn-primary btn-sm shrink-0"
                    >
                      {loading ? <span className="loading loading-spinner"></span> : <AiOutlineSave />}
                    </button>
                  </>
                ) : (
                  <>
                    <span className="flex-1 min-w-0 break-words whitespace-normal">{item}</span>
                    <button
                      onClick={() => {
                        setEditingField(`${field}-${i}`);
                        setTempValue(item);
                      }}
                      className="btn btn-accent btn-sm shrink-0"
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(field, i)}
                      className="btn btn-error btn-sm shrink-0"
                    >
                      <AiOutlineDelete />
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>

          {editingField === `${field}-add` && (
            <div className="flex gap-2 mt-2 flex-wrap break-words">
              <input
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="border p-1 rounded flex-1 min-w-0 break-words whitespace-normal"
                style={{ borderColor: colors.primary }}
              />
              <button
                onClick={() => handleAdd(field, tempValue)}
                className="btn btn-success btn-sm shrink-0"
              >
                {loading ? <span className="loading loading-spinner"></span> : <AiOutlineSave />}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projectupdate;
