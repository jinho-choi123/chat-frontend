import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <div>
            Login Page
            <br/>
            <a href='http://localhost:3000/api/auth/google' >Google Login</a>
        </div>
    )
}

export default LoginPage