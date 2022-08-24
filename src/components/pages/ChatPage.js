import LoginModal from '../organisms/LoginModal.js'
import Chat from '../organisms/Chat.js'
import {useState} from 'react'

const ChatPage = (props) => {
    const [modalShow, setModalShow] = useState(true)

    return (
        <div>
            <LoginModal 
            show={modalShow}
            onHide={()=>setModalShow(false)}
            />
            <Chat />
        </div>
    )
}

export default ChatPage