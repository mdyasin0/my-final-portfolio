import { useNavigate } from "react-router";
import { ColorContext } from "../Color/ColorContext";
import { useContext } from "react";

const ErrorPage = () => {
  const { colors } = useContext(ColorContext);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirect to Home
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: colors.background, color: colors.text }}
    >
      <h1 className="text-6xl font-extrabold mb-4" style={{ color: colors.primary }}>
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: colors.accent }}>
        Page Not Found
      </h2>
      <p className="mb-8 text-lg">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={handleGoHome}
        className="py-3 px-6 rounded-full font-bold transition"
        style={{
          background: colors.primary,
          color: colors.background,
          boxShadow: `0 2px 8px ${colors.secondary}55`
        }}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
