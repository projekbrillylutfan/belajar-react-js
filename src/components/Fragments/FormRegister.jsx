import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Names"
        type="text"
        name="fullname"
        placeholder="insert your full name"
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="email@gmail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="********"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
