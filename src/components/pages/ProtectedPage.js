import { useEffect} from "react"
import axios from "axios"
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import userState from '../atoms/recoil/userState';

const ProtectedPage = () => {
    const [userData, setUserData] = useRecoilState(userState)

    useEffect(() => {
        axios.get('http://localhost:3000/api/auth/verify', 
            {
            withCredentials : true, 
            })
            .then((res) => {
                console.log(res)
                console.log("got data from server")
                setUserData(res.data)
            })
            .catch((err) => {
                console.log(err)
                console.log("error occured!")
            })
    }, [])

    return (
            <Outlet/>
    )

}

export default ProtectedPage