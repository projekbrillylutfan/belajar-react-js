import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts"

const Login = () => {
    return (
        <AuthLayouts title="Login">
            <FormLogin />
            <p className="text-sm mt-5 text-center">
                Don't have an account?{" "}
                <Link to={"/register"} className="font-bold text-blue-600">
                Sign Up
                </Link>
            </p>
        </AuthLayouts>
    )
}

export default Login;