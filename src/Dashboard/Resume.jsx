import React, { useState, useEffect, useContext } from "react";
import { ColorContext } from "../Color/ColorContext";

function ResumeUpdater() {
  const { colors } = useContext(ColorContext); // color context use
  const [resumeLink, setResumeLink] = useState("");
  const [loading, setLoading] = useState(false);

  // Load existing resume link
  useEffect(() => {
    fetch("https://my-final-portfolio-server.vercel.app/resume")
      .then((res) => res.json())
      .then((data) => {
        if (data?.link) setResumeLink(data.link);
      })
      .catch((err) => console.error("Error fetching resume:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://my-final-portfolio-server.vercel.app/resume", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link: resumeLink }),
      });

      const data = await res.json();
      alert(data.message || "Updated successfully!");
    } catch (error) {
      console.error("Error updating resume:", error);
      alert("Failed to update resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="max-w-md mx-auto p-6 shadow-lg rounded-lg"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <h2
        className="text-xl font-bold mb-4"
        style={{ color: colors.primary }}
      >
        Update Resume Link
      </h2>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={resumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
          placeholder="Enter resume link"
          className="flex-1 p-2 border rounded-lg"
          style={{
            borderColor: colors.primary,
            color: colors.text,
            background: colors.background,
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: colors.primary,
            color: colors.background,
            borderRadius: "8px",
            padding: "0.5rem 1rem",
            fontWeight: "bold",
            transition: "background 0.3s",
          }}
          className="hover:opacity-90"
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
}

export default ResumeUpdater;
