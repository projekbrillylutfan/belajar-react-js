import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const Register = () => {
    return (
        <AuthLayouts title="Register" type="register">
            <FormRegister />
        </AuthLayouts>
    )
}

export default Register;