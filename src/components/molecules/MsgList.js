import { ListGroup } from "react-bootstrap"
import Msg from '../atoms/Msg.js'
import { socketContext } from '../../context/socket.js'
import store from '../../redux/store.js'
import { useState, useContext, useEffect} from "react";

const MsgList = (props) => {
    const [msgList, setMsgList] = useState([])
    const socket = useContext(socketContext);

    socket.on('message', (msg) => {
        const message = msg.message 
        const nickname = msg.nickname
        const timestamp = msg.timestamp
        console.log(message)
        console.log(nickname)
        console.log(timestamp)
        setMsgList([...msgList, {nickname: nickname, message: message, timestamp: timestamp}])
    })

    return (
        <ListGroup>
            {
                msgList.map((msgpacket) => {
                    console.log(msgList);
                    return (<Msg key={msgpacket.timestamp+msgpacket.nickname} nickname={msgpacket.nickname} message={msgpacket.message} />)
                })
            }
        </ListGroup>
    )
}

export default MsgList