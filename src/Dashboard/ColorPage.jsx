import React, { useState, useEffect, useContext } from "react";
import { ColorContext } from "../Color/ColorContext";

function ColorPage() {
  const { colors , setColors } = useContext(ColorContext);
  const [colorData, setColorData] = useState([]);
  const [editMode, setEditMode] = useState({});
  const [newColor, setNewColor] = useState("");

  // Fetch colors from backend
  useEffect(() => {
    fetch("https://my-final-portfolio-server.vercel.app/colors")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) setColorData(data[0]);
      })
      .catch((err) => console.error("Error fetching colors:", err));
  }, []);

  // Handle update click
 const handleUpdate = (theme, key) => {
  if (!newColor) return alert("Please enter a new color code!");
  if (!window.confirm("Are you sure to change the color?")) return;

  // API call to backend (PUT request)
  fetch(`https://my-final-portfolio-server.vercel.app/colors/${colorData._id}/${theme}/${key}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ newColor }), 
  })
    .then((res) => res.json())
    .then(() => {
      const updatedData = { ...colorData };
      updatedData[theme][key] = newColor;
      setColorData(updatedData);
      setColors(updatedData[theme]); 
      setEditMode({});
      setNewColor("");
    })
    .catch((err) => console.error("Error updating color:", err));
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
      <h1 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
        🎨 Manage Theme Colors
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {["light", "dark"].map((theme) => (
          <div
            key={theme}
            className="p-6 rounded-2xl shadow-lg"
            style={{ background: colors.secondary }}
          >
            <h2 className="text-xl font-bold mb-4 capitalize">{theme} Theme</h2>
            <div className="space-y-4">
              {colorData[theme] &&
                Object.entries(colorData[theme]).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between bg-white/20 p-3 rounded-lg"
                  >
                    {/* Color Box + Label */}
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "6px",
                          background: value,
                          border: "2px solid #00000033",
                        }}
                      ></div>
                      <span className="font-medium">{key}</span>
                    </div>

                    {/* Input + Update Button */}
                    {editMode[`${theme}-${key}`] ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder={value}
                          value={newColor}
                          onChange={(e) => setNewColor(e.target.value)}
                          className="px-2 py-1 border rounded"
                        />
                        <button
                          onClick={() => handleUpdate(theme, key)}
                          className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => {
                            setEditMode({});
                            setNewColor("");
                          }}
                          className="px-3 py-1 rounded bg-gray-400 text-white hover:bg-gray-500"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() =>
                          setEditMode({ [`${theme}-${key}`]: true })
                        }
                        className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Update
                      </button>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPage;
