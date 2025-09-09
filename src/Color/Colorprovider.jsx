import React, { useState, useEffect } from "react";
import { ColorContext } from "./ColorContext";

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState({});
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    fetch("/Colors.json")
      .then((res) => res.json())
      .then((data) => {
       
        setColors(data[theme]);
      });
  }, [theme]);

  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }, [colors]);

  return (
    <ColorContext.Provider value={{ colors, theme, toggleTheme }}>
      {children}
    </ColorContext.Provider>
  );
};