import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button";
import { login } from "../../services/auth.service";
import { useState } from "react";

const FormLogin = () => {

  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res );
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="email or username"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
      {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
