import React, { useState, useContext } from "react";
import { AuthContext } from "../Authcontext/Context";
import { ColorContext } from "../Color/ColorContext";

const AuthForm = () => {
  const { colors } = useContext(ColorContext);
  const { loginWithGoogle, loginWithEmail, registerWithEmail } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveUserData = async (userData) => {
    try {
      const res = await fetch("https://my-final-portfolio-server.vercel.app/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      return await res.json();
    } catch (error) {
      console.error("❌ Error saving user data:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const loggedInUser = await loginWithGoogle();

      if (loggedInUser) {
        const locationData = await fetch("https://my-final-portfolio-server.vercel.app/api/location").then(res => res.json());

        const userData = {
          name: loggedInUser.displayName || "No Name",
          email: loggedInUser.email,
          loginType: "google",
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
          console.log("✅ Google user saved to DB");
        } else {
          console.error("❌ Failed to save Google user", result);
        }
      }
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await loginWithEmail(formData.email, formData.password);
      } else {
        await registerWithEmail(formData.email, formData.password);

        const locationData = await fetch("https://my-final-portfolio-server.vercel.app/api/location").then(res => res.json());

        const userData = {
          name: formData.name,
          email: formData.email,
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
          console.log("✅ User registered and saved successfully");
        } else {
          console.error("❌ Failed to save user", result);
        }
      }
    } catch (error) {
      console.error("Auth error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: colors.background }}>
      <div
        className="w-full max-w-md p-6 rounded-2xl shadow-2xl"
        style={{ background: colors.background, color: colors.text, border: `2px solid ${colors.primary}` }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.primary }}>
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 w-full"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full font-bold"
            style={{ background: colors.primary, color: colors.background }}
          >
            {isLogin ? "Login" : "Register"}
          </button>

          {isLogin && (
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-3 rounded-full font-bold"
              style={{ background: colors.accent, color: colors.background }}
            >
              Sign in with Google
            </button>
          )}
        </form>

        <p className="mt-4 text-center text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
