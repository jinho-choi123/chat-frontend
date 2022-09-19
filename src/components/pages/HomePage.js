import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isValidUser } from "../atoms/recoil/userSelector";
import { useRecoilValue } from "recoil";


const HomePage = () => {
    const isValid = useRecoilValue(isValidUser);

    return (
        <div>
            <meta httpEquiv='cache-control' content='no-cache'/>
            <meta httpEquiv='expires' content='0'/>
            <meta httpEquiv='pragma' content='no-cache'/>
            Home Page
            <br/>
            <br/>
            <Link to='/login'>Login</Link>
            <br/>
            <br/>
            <Link to='/logout'>Logout</Link>
            <br/>
            <br/>
            Cookie Session Status(Is Cookie session Valid?)
            <br/>
            <br/>
            {isValid?'VALID USER': 'NOT VALID USER'}

        </div>
    )
}

export default HomePage