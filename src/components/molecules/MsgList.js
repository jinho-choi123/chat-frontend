import { ListGroup } from "react-bootstrap"
import Msg from '../atoms/Msg.js'
import { socketContext } from '../../context/socket.js'
import store from '../../redux/store.js'
import { useState, useContext, useEffect} from "react";
import axios from 'axios'

const MsgList = (props) => {
    
    const [msgList, setMsgList] = useState([])
    const socket = useContext(socketContext);
    const roomId = store.getState().rootReducer.roomIdReducer.roomId

    useEffect(() => {
        const chatLogFetch = async () => {
            const msgListDB = await axios({
                method: 'get',
                url: 'http://localhost:9000/chatlog',
                params: { roomId: roomId }
            })
            console.log(msgListDB.data)
            setMsgList(msgListDB.data.map((packet) => {
                const tmstmp = new Date(packet.timestamp).getTime();
                return {
                    nickname: packet.author,
                    message: packet.message,
                    timestamp: tmstmp,
                }
            }));
        }
        chatLogFetch();
    }, [])

    socket.on('message', (msg) => {
        const message = msg.message 
        const nickname = msg.nickname
        const timestamp = msg.timestamp
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