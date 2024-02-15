import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const AuthLayouts = ({ children, title, type }) => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
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

 const Navigation = ({type}) => {
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
}

AuthLayouts.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
};

export default AuthLayouts;
