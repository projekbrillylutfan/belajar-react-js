import Label from "./Label";
import Input from "./Input";
import PropTypes from "prop-types";



const InputForm = ({ label, type, name, placeholder }) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
};

export default InputForm;
