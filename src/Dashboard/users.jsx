import { useEffect, useState, useContext } from "react";
import { ColorContext } from "../Color/ColorContext";
import { getBrowserName } from "./browserDetect";

const UserDashboard = () => {
  const { colors } = useContext(ColorContext);

  const [users, setUsers] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [stats, setStats] = useState({});
  const [browserList, setBrowserList] = useState([]);
  const [selectedBrowser, setSelectedBrowser] = useState("");
  const [browserUserCount, setBrowserUserCount] = useState(0);

  const [selectedUsers, setSelectedUsers] = useState(new Set());
  const [copyFields, setCopyFields] = useState(["Email", "Name"]);
// state
const [searchQuery, setSearchQuery] = useState("");

// Search function
const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
};

// Delete function
const handleDeleteSelected = async () => {
  if (selectedUsers.size === 0) {
    alert("Please select at least one user to delete!");
    return;
  }

  if (!window.confirm("Are you sure you want to delete selected user(s)?")) return;

  try {
    //  backend API
    const res = await fetch("http://localhost:3000/users/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: Array.from(selectedUsers) }),
    });
    const data = await res.json();
    if (data.success) {
      alert(" Selected user(s) deleted successfully!");
      fetchUsers(); // Refresh user list
      setSelectedUsers(new Set());
    }
  } catch (err) {
    console.error(err);
    alert(" Error deleting users.");
  }
};


  const filterOptions = [
    "Country",
    "Login Type",
    "Device Type",
    "Browser",
    "Last Login",
    "Created At"
  ];

  const copyFieldOptions = [
    "Email",
    "Name",
    "Login Type",
    "Country",
    "Location",
    "Device Type",
    "Device Name",
    "Last Login",
    "Created At"
  ];

  //  Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      if (data.success) {
        setUsers(data.users);
        computeStats(data.users);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Stats Calculation
  const computeStats = (users) => {
    const statsData = {
      totalUsers: users.length,
      googleUsers: users.filter(u => u.loginType === "google").length,
      registerUsers: users.filter(u => u.loginType === "register").length,
      bangladeshUsers: users.filter(u => u.country?.toLowerCase() === "bangladesh").length,
      otherCountryUsers: users.filter(u => u.country?.toLowerCase() !== "bangladesh").length,
      desktopUsers: users.filter(u => u.deviceType === "desktop").length,
      mobileUsers: users.filter(u => u.deviceType === "mobile").length,
      browsers: {}
    };

    users.forEach(u => {
      const browser = getBrowserName(u.deviceName);
      statsData.browsers[browser] = (statsData.browsers[browser] || 0) + 1;
    });

    setStats(statsData);

    const browsers = Object.keys(statsData.browsers);
    setBrowserList(browsers);

    let maxBrowser = browsers[0];
    let maxCount = statsData.browsers[maxBrowser];
    browsers.forEach(b => {
      if (statsData.browsers[b] > maxCount) {
        maxBrowser = b;
        maxCount = statsData.browsers[b];
      }
    });
    setSelectedBrowser(maxBrowser);
    setBrowserUserCount(maxCount);
  };

  useEffect(() => {
    fetchUsers();
  });

  //  Suggestion generator
  const generateSuggestions = (value = "") => {
    if (!filterBy) return;
    const lowerValue = value.toLowerCase();
    let possible = [];

    if (filterBy === "Country") possible = [...new Set(users.map(u => u.country).filter(Boolean))];
    else if (filterBy === "Login Type") possible = [...new Set(users.map(u => u.loginType).filter(Boolean))];
    else if (filterBy === "Device Type") possible = [...new Set(users.map(u => u.deviceType).filter(Boolean))];
    else if (filterBy === "Browser") possible = [...new Set(users.map(u => getBrowserName(u.deviceName)).filter(Boolean))];

    if (!value) {
    
      setSuggestions(possible);
    } else {
      
      const filteredSuggestions = possible.filter(item =>
        item.toLowerCase().includes(lowerValue)
      );
      setSuggestions(filteredSuggestions);
    }
  };

  //  Input change
  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
    generateSuggestions(e.target.value);
  };

  //  Input click 
  const handleFilterClick = () => {
    generateSuggestions("");
  };

  //  Filtered users
const filteredUsers = users
  .filter(user => {
    if (!filterBy) return true;

    // 🗓️ Date filter handle
    if (filterBy === "Last Login" || filterBy === "Created At") {
      if (!filterValue?.from && !filterValue?.to) return true;
      const userDate = new Date(
        filterBy === "Last Login" ? user.lastLogin : user.createdAt
      );
      const from = filterValue?.from ? new Date(filterValue.from) : null;
      const to = filterValue?.to ? new Date(filterValue.to) : null;
      if (from && userDate < from) return false;
      if (to && userDate > to) return false;
      return true;
    }

    // 🔤 Normal text-based filters
    if (!filterValue) return true;
    if (filterBy === "Country") return user.country?.toLowerCase().includes(filterValue.toLowerCase());
    if (filterBy === "Login Type") return user.loginType?.toLowerCase().includes(filterValue.toLowerCase());
    if (filterBy === "Device Type") return user.deviceType?.toLowerCase().includes(filterValue.toLowerCase());
    if (filterBy === "Browser") return getBrowserName(user.deviceName).toLowerCase().includes(filterValue.toLowerCase());
    return true;
  })
  .filter(user => {
    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase();
    return (
      user.email?.toLowerCase().includes(query) ||
      user.name?.toLowerCase().includes(query) ||
      user.loginType?.toLowerCase().includes(query) ||
      user.country?.toLowerCase().includes(query) ||
      user.location?.toLowerCase().includes(query) ||
      user.deviceType?.toLowerCase().includes(query) ||
      user.deviceName?.toLowerCase().includes(query) ||
      new Date(user.lastLogin).toLocaleString().toLowerCase().includes(query) ||
      new Date(user.createdAt).toLocaleString().toLowerCase().includes(query)
    );
  });


  // Copy System
  const handleSelectUser = (id) => {
    const newSet = new Set(selectedUsers);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedUsers(newSet);
  };

  const handleSelectAll = () => {
    if (selectedUsers.size === filteredUsers.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(new Set(filteredUsers.map(u => u._id)));
    }
  };

  const handleCopy = () => {
    if (selectedUsers.size === 0) {
      alert("Please select at least one user to copy!");
      return;
    }

    const header = copyFields.join(" | ");
    const selectedData = filteredUsers
      .filter(u => selectedUsers.has(u._id))
      .map(u =>
        copyFields.map(f => {
          if (f === "Name") return u.name || "";
          if (f === "Email") return u.email || "";
          if (f === "Login Type") return u.loginType || "";
          if (f === "Country") return u.country || "";
          if (f === "Location") return u.location || "";
          if (f === "Device Type") return u.deviceType || "";
          if (f === "Device Name") return u.deviceName || "";
          if (f === "Last Login") return new Date(u.lastLogin).toLocaleString();
          if (f === "Created At") return new Date(u.createdAt).toLocaleString();
          return "";
        }).join(" | ")
      )
      .join("\n");

    navigator.clipboard.writeText(`${header}\n${selectedData}`);
    alert(" Selected data copied to clipboard!");
  };

  return (
    <div className="p-6 min-h-screen" style={{ background: colors.background, color: colors.text }}>
      <h1 className="text-4xl font-bold mb-6" style={{ color: colors.primary }}>User Contact Dashboard</h1>

      {/*  Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {Object.entries(stats).map(([key, value]) => {
          if (key === "browsers") {
            return (
              <div key={key} className="p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
                style={{ background: colors.accent, color: colors.background }}>
                <strong className="text-lg">Browser Users</strong>
                <select
                  value={selectedBrowser}
                  onChange={(e) => setSelectedBrowser(e.target.value)}
                  className="mt-3 p-2 border rounded"
                >
                  {browserList.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <p className="mt-3 text-2xl font-bold">{selectedBrowser} → {browserUserCount}</p>
              </div>
            );
          }

          return (
            <div key={key} className="p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
              style={{ background: colors.accent, color: colors.background }}>
              <strong className="text-lg">{key.replace(/([A-Z])/g, " $1")}</strong>
              <p className="mt-3 text-2xl font-bold">
                {typeof value === "object" ? JSON.stringify(value) : value}
              </p>
            </div>
          );
        })}
      </div>

     <div className="flex justify-between">

   {/*  Filter System */}
<div className="mb-6 flex gap-4 flex-wrap">
  <select
    value={filterBy}
    onChange={(e) => {
      setFilterBy(e.target.value);
      setFilterValue("");
      setSuggestions([]);
    }}
    className="p-2 border rounded"
  >
    <option value="">Select Filter</option>
    {filterOptions.map(option => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>

  {/* Date Filter for Last Login / Created At */}
  {(filterBy === "Last Login" || filterBy === "Created At") ? (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex flex-col">
        <label className="text-sm text-gray-500">From:</label>
        <input
          type="date"
          onChange={(e) =>
            setFilterValue((prev) => ({
              ...prev,
              from: e.target.value,
            }))
          }
          className="p-2 border rounded"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-gray-500">To:</label>
        <input
          type="date"
          onChange={(e) =>
            setFilterValue((prev) => ({
              ...prev,
              to: e.target.value,
            }))
          }
          className="p-2 border rounded"
        />
      </div>
    </div>
  ) : filterBy ? (
    //  Normal text-based filter (with suggestions)
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        value={filterValue}
        onClick={handleFilterClick}
        onChange={handleFilterChange}
        className="p-2 border rounded w-full"
        placeholder={`Filter by ${filterBy}`}
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border w-full max-h-40 overflow-y-auto z-10">
          {suggestions.map(s => {
            const matchIndex = s.toLowerCase().indexOf(filterValue.toLowerCase());
            const before = s.slice(0, matchIndex);
            const match = s.slice(matchIndex, matchIndex + filterValue.length);
            const after = s.slice(matchIndex + filterValue.length);
            return (
              <li
                key={s}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => setFilterValue(s)}
              >
                {before}
                <span style={{ color: "green", fontWeight: "bold" }}>{match}</span>
                {after}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  ) : null}
</div>

<div className="mb-4 flex gap-4 items-center flex-wrap">
  {/* Search Bar */}
  <input
    type="text"
    value={searchQuery}
    onChange={handleSearchChange}
    placeholder="Search all fields..."
    className="p-2 border rounded w-full max-w-md"
  />

  {/* Delete Button */}
  <button
    className="px-4 py-2 bg-red-500 text-white rounded"
    onClick={handleDeleteSelected}
  >
    Delete Selected
  </button>
</div>


      {/*  Copy System */}
      <div className="mb-6 flex gap-4 items-center flex-wrap">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSelectAll}>
          {selectedUsers.size === filteredUsers.length ? "Deselect All" : "Select All"}
        </button>

        <select
          multiple
          value={copyFields}
          onChange={(e) => setCopyFields(Array.from(e.target.selectedOptions, o => o.value))}
          className="p-2 border rounded"
          style={{ minWidth: "220px" }}
        >
          {copyFieldOptions.map(f => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>

        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleCopy}>
          Copy Selected
        </button>
      </div>
     </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr style={{ background: colors.primary, color: colors.background }}>
              <th className="border px-4 py-2 text-center">
                <input type="checkbox" onChange={handleSelectAll} checked={selectedUsers.size === filteredUsers.length} />
              </th>
              {copyFieldOptions.map(head => (
                <th key={head} className="border px-4 py-2">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user._id}>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedUsers.has(user._id)}
                    onChange={() => handleSelectUser(user._id)}
                  />
                </td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.loginType}</td>
                <td className="border px-4 py-2">{user.country}</td>
                <td className="border px-4 py-2">{user.location}</td>
                <td className="border px-4 py-2">{user.deviceType}</td>
                <td className="border px-4 py-2">{user.deviceName}</td>
                <td className="border px-4 py-2">{new Date(user.lastLogin).toLocaleString()}</td>
                <td className="border px-4 py-2">{new Date(user.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
