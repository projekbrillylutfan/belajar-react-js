import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
const AuthLayouts = ({ children, title, type }) => {
  const { isDark, setIsDark } = useContext(DarkMode);
  {
    console.log("🚀 ~ AuthLayouts ~ isDark:", isDark);
  }
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDark && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded-sm"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "register") {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to={"/"} className="font-bold text-blue-600">
          Sign In
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to={"/register"} className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    );
  }
};

AuthLayouts.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
};

export default AuthLayouts;
