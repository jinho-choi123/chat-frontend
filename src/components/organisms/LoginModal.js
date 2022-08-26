import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useState, useContext } from 'react'
import store from '../../redux/store.js';
import nicknameAction from '../../redux/actions/nickname.js';
import roomIdAction from '../../redux/actions/roomId.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { socketContext } from '../../context/socket.js'

const LoginModal = (props) => {
    const [nickname, setNickname] = useState("")
    const [roomId, setRoomId] = useState("")
    const socket = useContext(socketContext);

    const nicknameHandler = (event) => {
        event.preventDefault();
        setNickname(event.target.value);
    }

    const roomIdHandler = (event) => {
        event.preventDefault();
        setRoomId(event.target.value);
    }

    const joinHandler = (event) => {
        event.preventDefault();
        store.dispatch(roomIdAction(roomId));
        store.dispatch(nicknameAction(nickname));
        socket.emit('join-attempt', {nickname: nickname, roomId: roomId})
        props.onHide()
    }

    const enterHandler = (event) => {
        console.log("enter pressed")
        if (event.key === 'Enter') {
            joinHandler(event)
        }
    }

    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Set Nickname and RoomID
            </Modal.Title>
        </Modal.Header>
        <Form
                >
            <Modal.Body>
                
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter nickname"
                            onChange={nicknameHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Room ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="6-digits"
                            onChange={roomIdHandler} 
                            onKeyDown={enterHandler}
                            />
                    </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button 
                variant="primary" 
                type="submit" 
                onClick={joinHandler}
                >Join</Button>
            </Modal.Footer>
        </Form>

    </Modal>
    )
}

export default LoginModal