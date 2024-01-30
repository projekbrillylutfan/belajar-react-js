import PropTypes from "prop-types";

const Button = ({ variant = "bg-black", children }) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.node.isRequired,
};

export default Button;
