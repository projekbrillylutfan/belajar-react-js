import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <AuthLayouts title="Register">
            <FormRegister />
            <p className="text-sm mt-5 text-center">
                already have an account?{" "}
                <Link to={"/login"} className="font-bold text-blue-600">
                Sign In
                </Link>
            </p>
        </AuthLayouts>
    )
}

export default Register;