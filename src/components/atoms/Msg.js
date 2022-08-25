import { ListGroup } from "react-bootstrap"

const Msg = (props) => {
    return (
    <ListGroup.Item>
        {props.nickname}: {props.message}
    </ListGroup.Item>
    )
}

export default Msg