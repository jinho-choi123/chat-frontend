import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from "react";
import {socketContext} from '../../context/socket.js'
import store from '../../redux/store.js'


const MsgBox = (props) => {
    const socket = useContext(socketContext);
    const [message, setMessage] = useState("");
    
    const messageHandler = (event) => {
        event.preventDefault();
        setMessage(event.target.value);
    }

    const sendHandler = (event) => {
        event.preventDefault()
        const nickname = store.getState().nickname
        socket.emit("message", {nickname: nickname, message: message})
        console.log("emit chat!!!!!!!!!!!")
    }

    return (
        <InputGroup className="mb-3">
            <Form.Control
                aria-describedby="basic-addon2"
                onChange={messageHandler}
            />
            <Button variant="primary" type="submit" onClick={sendHandler}>
                Send
            </Button>
        </InputGroup>
    )
}

export default MsgBox