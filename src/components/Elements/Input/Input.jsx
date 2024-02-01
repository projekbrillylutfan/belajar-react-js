import PropTypes from "prop-types";

const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-90"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

Input.propTypes = {
  type: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
};

export default Input;
