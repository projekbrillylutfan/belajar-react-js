import PropTypes from "prop-types";

const Button = ({ classname = "bg-black", children }) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classname: PropTypes.node.isRequired,
};

export default Button;
