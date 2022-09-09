import axios from "axios"
import { useEffect, useState } from "react"

const HomePage = () => {

    const [userData, setUserData] = useState({})

    useEffect(() => {
        axios.get('http://localhost:9000/auth/verify', 
        {
            withCredentials : true, 
            headers: {
                "Access-Control-Allow-Origin": 'http://localhost:9000/'
            }})
            .then((res) => {
                console.log(res.data)
                setUserData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <meta httpEquiv='cache-control' content='no-cache'/>
            <meta httpEquiv='expires' content='0'/>
            <meta httpEquiv='pragma' content='no-cache'/>
            Home Page
            <br/>
            <br/>
            <br/>
            Cookie Session Status(Is Cookie session Valid?)
            <br/>
            <br/>
            {userData.verification? 'IT IS VALID!': 'IT IS NOT VALID!'}

        </div>
    )
}

export default HomePage