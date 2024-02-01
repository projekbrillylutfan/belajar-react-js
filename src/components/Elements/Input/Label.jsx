import PropTypes from "prop-types";

const Label = ({ name, children }) => {
  return (
    <label
      htmlFor={name}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {children}
    </label>
  );
};

Label.propTypes = {
    name: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;
