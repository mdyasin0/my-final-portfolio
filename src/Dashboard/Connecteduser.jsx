import React, { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ColorContext } from "../Color/ColorContext";

const ConnectedUserTable = () => {
  const { colors } = useContext(ColorContext);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/connectusers")
      .then((res) => res.json())
      .then((data) => {
        if (!data.success || !data.connectedUsers) return;

        const grouped = data.connectedUsers.reduce((acc, item) => {
          const email = item.email;
          if (!acc[email]) {
            acc[email] = {
              name: item.name,
              email,
              messages: item.messages || [],
            };
          }
          return acc;
        }, {});

        const userList = Object.values(grouped);
        setUsers(userList);
        setFilteredUsers(userList);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  //  Email search filter
  useEffect(() => {
    const filtered = users.filter((user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  return (
    <div
      className="p-6 min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      <h2
        className="text-2xl font-semibold mb-4"
        style={{ color: colors.primary }}
      >
        Connected Users
      </h2>

      {/*  Search Box */}
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search by email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: `1px solid ${colors.primary}55`,
            backgroundColor: colors.background,
            color: colors.text,
            boxShadow: `0 0 6px ${colors.primary}30`,
          }}
          className="px-3 py-2 rounded w-64 focus:outline-none focus:ring-2"
        />
      </div>

      {/* ---------- Table ---------- */}
      <div className="overflow-x-auto">
        <table
          className="w-full border text-left rounded-lg overflow-hidden"
          style={{
            borderColor: `${colors.primary}33`,
          }}
        >
          <thead
            style={{
              backgroundColor: `${colors.primary}15`,
              color: colors.text,
            }}
          >
            <tr>
              <th className="p-2 border" style={{ borderColor: `${colors.primary}25` }}>Name</th>
              <th className="p-2 border" style={{ borderColor: `${colors.primary}25` }}>Email</th>
              <th className="p-2 border text-center" style={{ borderColor: `${colors.primary}25` }}>Message Count</th>
              <th className="p-2 border text-center" style={{ borderColor: `${colors.primary}25` }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, i) => (
                <tr
                  key={i}
                  className="transition-colors duration-200"
                  style={{
                    borderColor: `${colors.primary}20`,
                  }}
                >
                  <td className="p-2 border" style={{ borderColor: `${colors.primary}15` }}>
                    {user.name}
                  </td>
                  <td className="p-2 border" style={{ borderColor: `${colors.primary}15` }}>
                    {user.email}
                  </td>
                  <td className="p-2 border text-center" style={{ borderColor: `${colors.primary}15` }}>
                    {user.messages.length}
                  </td>
                  <td className="p-2 border text-center" style={{ borderColor: `${colors.primary}15` }}>
                    <button
                      onClick={() => openModal(user)}
                      style={{
                        background: colors.accent,
                        color: colors.background,
                        borderRadius: "6px",
                        padding: "6px 12px",
                        fontWeight: "500",
                        boxShadow: `0 2px 6px ${colors.primary}50`,
                        transition: "all 0.25s ease",
                      }}
                      className="hover:scale-105"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4"
                  style={{ color: colors.text }}
                >
                  No user found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ---------- Modal ---------- */}
      <AnimatePresence>
        {showModal && selectedUser && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-lg p-6 w-[90%] max-w-md shadow-lg transition-colors"
              style={{
                backgroundColor: colors.background,
                color: colors.text,
                border: `1px solid ${colors.primary}30`,
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: colors.primary }}
              >
                Messages from {selectedUser.name}
              </h3>
              <p className="mb-4">{selectedUser.email}</p>
              <div
                className="max-h-64 overflow-y-auto border-t pt-2"
                style={{ borderColor: `${colors.primary}25` }}
              >
                {selectedUser.messages.map((msg, i) => (
                  <div
                    key={i}
                    className="border-b py-2 text-sm flex flex-col gap-1"
                    style={{ borderColor: `${colors.primary}15` }}
                  >
                    <p>💬 {msg.message}</p>
                    <span
                      className="text-xs"
                      style={{ color: colors.secondary }}
                    >
                      🕒{" "}
                      {new Date(
                        msg.createdAt?.$date?.$numberLong ||
                          msg.createdAt ||
                          Date.now()
                      ).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-right">
                <button
                  onClick={closeModal}
                  style={{
                    background: colors.primary,
                    color: colors.background,
                    padding: "6px 16px",
                    borderRadius: "6px",
                    fontWeight: "500",
                    transition: "all 0.25s ease",
                  }}
                  className="hover:scale-105"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConnectedUserTable;
