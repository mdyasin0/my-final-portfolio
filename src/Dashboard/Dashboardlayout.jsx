// DashboardLayout.jsx
import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router";
import { ColorContext } from "../Color/ColorContext";

function DashboardLayout() {
  const { colors } = useContext(ColorContext);

  const getLinkStyle = ({ isActive }) => ({
    display: "block",
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    color: isActive ? colors.background : colors.text,
    background: isActive ? colors.accent : "transparent",
    fontWeight: isActive ? "bold" : "normal",
    transition: "all 0.3s ease"
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        height: "calc(100vh - 64px)", 
        background: colors.background,
        color: colors.text,
      }}
   
    >
      {/* Sidebar */}
      <aside
        style={{
          background: colors.background,
          borderRight: `2px solid ${colors.primary}`,
          overflowY: "auto"
        }}
        className="p-4 shadow-lg"
      >
       
        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboardlayout/colorpage" style={getLinkStyle}>Colors</NavLink>
          <NavLink to="/dashboardlayout/resumeupdater" style={getLinkStyle}>Resume</NavLink>
          <NavLink to="/dashboardlayout/projectsdashboard" style={getLinkStyle}>Projects-manage</NavLink>
          <NavLink to="/dashboardlayout/userdashboard" style={getLinkStyle}>user-contact</NavLink>
          <NavLink to="/dashboard/skills" style={getLinkStyle}>Skills</NavLink>
          <NavLink to="/dashboard/messages" style={getLinkStyle}>Messages</NavLink>
          <NavLink to="/dashboard/settings" style={getLinkStyle}>Settings</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        style={{
          background: colors.background,
          padding: "1.5rem",
          overflowY: "auto"
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
