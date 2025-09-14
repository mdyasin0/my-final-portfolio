// BlogLayout.jsx
import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { ColorContext } from "../../Color/ColorContext";
import { FaChevronDown, FaChevronUp, FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const categories = [
  {
    name: "Frontend",
    icon: <FaCode />,
    routes: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React"],
  },
  {
    name: "Backend",
    icon: <FaServer />,
    routes: ["Node.js", "Express.js"],
  },
  {
    name: "Database",
    icon: <FaDatabase />,
    routes: ["MongoDB"],
  },
  {
    name: "Tools",
    icon: <FaTools />,
    routes: ["Firebase", "Git", "Vite"],
  },
];

function BlogLayout() {
  const { colors } = useContext(ColorContext);
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (name) => {
    setOpenCategories((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const getLinkStyle = ({ isActive }) => ({
    color: isActive ? colors.accent : colors.text,
    fontWeight: isActive ? "bold" : "normal",
    borderLeft: isActive ? `4px solid ${colors.primary}` : "4px solid transparent",
    paddingLeft: "0.5rem",
    transition: "all 0.3s",
    display: "block",
  });

  return (
    <div
      style={{ background: colors.background, color: colors.text }}
      className="min-h-screen flex transition-colors duration-300"
    >
      {/* Left Sidebar */}
      <aside
        style={{ background: colors.secondary }}
        className="w-64 hidden md:block p-6 shadow-lg overflow-y-auto max-h-screen"
      >
        {categories.map((category) => (
          <div key={category.name} className="mb-4">
            <button
              onClick={() => toggleCategory(category.name)}
              className="flex items-center justify-between w-full mb-2 font-bold text-lg"
              style={{ color: colors.primary }}
            >
              <span className="flex items-center gap-2">{category.icon} {category.name}</span>
              {openCategories[category.name] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openCategories[category.name] && (
              <ul className="pl-6 space-y-1">
                {category.routes.map((route) => (
                  <li key={route}>
                    <NavLink
                      to={`/bloglayout/${route.toLowerCase().replace(/\s+/g, "-")}`}
                      style={getLinkStyle}
                    >
                      {route}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </aside>

      {/* Right Content */}
      <main className="flex-1 p-6 overflow-y-auto max-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default BlogLayout;
