import React, { useState, useEffect } from "react";
import { ColorContext } from "./ColorContext";

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState({});
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    fetch("https://my-final-portfolio-server.vercel.app/colors")
      .then((res) => res.json())
      .then((data) => {
        
        if (data.length > 0) {
          setColors(data[0][theme]); 
        }
      })
      .catch((err) => console.error("Error fetching colors:", err));
  }, [theme]);

  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }, [colors]);

  return (
    <ColorContext.Provider value={{ colors,setColors, theme, toggleTheme }}>
      {children}
    </ColorContext.Provider>
  );
};
