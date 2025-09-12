import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../Authcontext/Context";
import { ColorContext } from "../Color/ColorContext";
import { Link, useLocation } from "react-router";

const LoginPopup = () => {
  const { user, loginWithGoogle } = useContext(AuthContext);
  const { colors } = useContext(ColorContext);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  // Hide popup if user navigates to /authForm
  useEffect(() => {
    setShowPopup(false);
  }, [location.pathname, user]);

  // Show popup if user is not logged in
  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [user]);

  const handleSkip = () => {
    setShowPopup(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      setShowPopup(false); // Hide after login
    } catch (error) {
      console.error("Google login failed", error);
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
            🚀 Join Us Today!
          </h3>
          <p className="mb-6" style={{ color: colors.text }}>
            Register or sign in with Google to unlock full features.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/authForm"
              onClick={() => setShowPopup(false)} // Hide popup on click
              style={{
                background: colors.primary,
                color: colors.background,
                borderRadius: "999px",
                padding: "0.5rem 1.2rem",
                fontWeight: "bold",
                boxShadow: `0 2px 8px ${colors.secondary}55`,
                transition: "background 0.3s, color 0.3s",
              }}
              className="hover:bg-[var(--color-accent)] text-center hover:text-white transition"
            >
              Register
            </Link>
            <button
              onClick={handleGoogleLogin}
              style={{
                background: colors.primary,
                color: colors.background,
                borderRadius: "999px",
                padding: "0.5rem 1.2rem",
                fontWeight: "bold",
                boxShadow: `0 2px 8px ${colors.secondary}55`,
                transition: "background 0.3s, color 0.3s",
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
                transition: "background 0.3s, color 0.3s",
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
