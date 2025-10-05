import { useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AuthContext } from "../Authcontext/Context";
import { ColorContext } from "../Color/ColorContext";
import { useLocation, useNavigate } from "react-router";

const LoginPopup = () => {
  const { user, loginWithGoogle } = useContext(AuthContext);
  const { colors } = useContext(ColorContext);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setShowPopup(false);
  }, [location.pathname, user]);

  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => setShowPopup(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  const handleSkip = () => {
    setShowPopup(false);
  };

  const saveUserData = async (userData) => {
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      return await res.json();
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const fetchLocationData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/location");
      if (!res.ok) throw new Error("Location API failed");
      return await res.json();
    } catch (error) {
      console.error("Error fetching location:", error);
      return {};
    }
  };

  const handleUserLoginOrRegister = async () => {
    try {
      const loggedInUser = await loginWithGoogle();

      if (loggedInUser) {
        const deviceType = /Mobi|Android/i.test(navigator.userAgent)
          ? "mobile"
          : /Tablet|iPad/i.test(navigator.userAgent)
          ? "tablet"
          : "desktop";

        const deviceName = navigator.userAgent;
        const locationData = await fetchLocationData();

        const userData = {
          name: loggedInUser.displayName || "No Name",
          email: loggedInUser.email,
          loginType: "google",
          country: locationData.country_name || "Unknown",
          location: `${locationData.city || ""}, ${locationData.region || ""}, ${locationData.country_name || ""}`,
          deviceType,
          deviceName,
          lastLogin: new Date().toISOString(),
        };

        await saveUserData(userData);
        setShowPopup(false);
      }
    } catch (error) {
      console.error("Login/Register failed:", error);
    }
  };

 const handleRegister = async () => {
  try {
    const locationData = await fetchLocationData();

    const userData = {
      name: "New User", 
      email: "newuser@example.com",
      loginType: "register",
      country: locationData.country_name || "Unknown",
      location: `${locationData.city || ""}, ${locationData.region || ""}, ${locationData.country_name || ""}`,
      deviceType: /Mobi|Android/i.test(navigator.userAgent)
        ? "mobile"
        : /Tablet|iPad/i.test(navigator.userAgent)
        ? "tablet"
        : "desktop",
      deviceName: navigator.userAgent,
      lastLogin: new Date().toISOString(),
    };

    const result = await saveUserData(userData);

    if (result?.success) {
      console.log("Register data saved successfully");
      setShowPopup(false);
      navigate("/authForm"); // route change data save 
    } else {
      console.error(" Failed to save register data", result);
    }
  } catch (error) {
    console.error("Register failed:", error);
  }
};


  return (
    <AnimatePresence>
      {showPopup && !user && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-10 left-4 z-50 shadow-2xl rounded-2xl p-6 w-80"
          style={{
            backgroundColor: colors.background,
            color: colors.text,
            border: `2px solid ${colors.primary}`,
            boxShadow: `0 4px 15px ${colors.secondary}55`,
          }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
             Join Us Today!
          </h3>
          <p className="mb-6" style={{ color: colors.text }}>
            Register or sign in with Google to unlock full features.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleRegister}
              style={{
                background: colors.primary,
                color: colors.background,
                borderRadius: "999px",
                padding: "0.5rem 1.2rem",
                fontWeight: "bold",
                boxShadow: `0 2px 8px ${colors.secondary}55`,
              }}
              className="hover:bg-[var(--color-accent)] hover:text-white transition"
            >
              Register
            </button>

            <button
              onClick={handleUserLoginOrRegister}
              style={{
                background: colors.primary,
                color: colors.background,
                borderRadius: "999px",
                padding: "0.5rem 1.2rem",
                fontWeight: "bold",
                boxShadow: `0 2px 8px ${colors.secondary}55`,
              }}
              className="hover:bg-[var(--color-accent)] hover:text-white transition"
            >
              Sign in with Google
            </button>

            <button
              onClick={handleSkip}
              style={{
                background: colors.accent,
                color: colors.background,
                borderRadius: "999px",
                padding: "0.5rem 1.2rem",
                fontWeight: "bold",
                boxShadow: `0 2px 8px ${colors.secondary}55`,
              }}
              className="hover:bg-[var(--color-primary)] hover:text-white transition"
            >
              Skip for now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginPopup;
