
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts"

const Login = () => {
    return (
        <AuthLayouts title="Login" type="login">
            <FormLogin />
            
        </AuthLayouts>
    )
}

export default Login;