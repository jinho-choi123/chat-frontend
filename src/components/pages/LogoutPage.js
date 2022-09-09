import axios from "axios";
import {useState} from 'react'
import { Navigate } from "react-router-dom";

const LogoutPage = () => {

    const [logoutStatus, setLogoutStatus] = useState(false);

    const LogoutHandler = (event) => {
        event.preventDefault();
        axios.get('http://localhost:9000/auth/logout', 
        {
            withCredentials : true, 
            headers: {
                "Access-Control-Allow-Origin": 'http://localhost:9000/'
            }
        })
            .then((res) => {
                console.log('logout success')
                setLogoutStatus(true);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            Logout Page
            <br/>
            <br/>
            <button onClick={LogoutHandler}>Logout Button</button>
            {
                logoutStatus && (<Navigate to='/' replace={true}/>)
            }
        </div>
    )
}

export default LogoutPage