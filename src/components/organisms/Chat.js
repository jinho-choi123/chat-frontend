import MsgBox from '../molecules/MsgBox.js'
import MsgList from '../molecules/MsgList.js'

const Chat = (props) => {

    return (
    <div>
        <MsgList />
        <MsgBox/>
    </div>
    )
}

export default Chat