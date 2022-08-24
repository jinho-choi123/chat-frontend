import { ListGroup } from "react-bootstrap"

const Msg = (props) => {
    return (
    <ListGroup.Item>
        {props.message}
    </ListGroup.Item>
    )
}

export default Msg