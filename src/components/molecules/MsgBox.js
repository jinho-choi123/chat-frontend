import { useState, useContext, useRef } from "react";
import {socketContext} from '../../context/socket.js'
import store from '../../redux/store.js'
import {StyledFormControl, StyledForm, StyledButton, StyledDiv} from '../styled/MsgBox.styled.js'

const MsgBox = (props) => {
    const socket = useContext(socketContext);
    const [message, setMessage] = useState("");
    const msgField = useRef(null);
    const messageHandler = (event) => {
        event.preventDefault();
        setMessage(event.target.value);
    }

    const sendHandler = (event) => {
        event.preventDefault()
        const nickname = store.getState().rootReducer.nicknameReducer.nickname
        socket.emit("message", {nickname: nickname, message: message})
        setMessage("");
        //clear input box
        msgField.current.value = "";
    }

    return (
        <StyledDiv >
            <StyledForm>
                <StyledFormControl
                    aria-describedby="basic-addon2"
                    onChange={messageHandler}
                    ref={msgField}
                />
                <StyledButton
                    variant="primary"
                    type="submit"
                    onClick={sendHandler}>
                    Send
                </StyledButton>
            </StyledForm>
        </StyledDiv>
        
    )
}

export default MsgBox