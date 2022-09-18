import { useEffect} from "react"
import axios from "axios"
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import userState from '../atoms/recoil/userState';

const ProtectedPage = () => {
    const [userData, setUserData] = useRecoilState(userState)

    useEffect(() => {
        axios.get('http://localhost:9000/auth/verify', 
            {
            withCredentials : true, 
            })
            .then((res) => {
                console.log(res)
                setUserData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
            <Outlet/>
    )

}

export default ProtectedPage