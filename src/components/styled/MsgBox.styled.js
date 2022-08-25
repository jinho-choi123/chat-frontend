import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const StyledFormControl = styled(Form.Control)`
    font-weight: bold;
    width: 400px;
    flex: 9
`
const StyledForm = styled(Form)`
    bottom: 0;
    display: flex;
    flex: 1;
    bottom: 0px;
    margin: 10px;
    flex-direction: reverse-column;
`
const StyledButton = styled(Button)`
    flex: 1;
    margin-left: 5px;
`
const StyledDiv = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%
`

export {StyledFormControl, StyledForm, StyledButton, StyledDiv}