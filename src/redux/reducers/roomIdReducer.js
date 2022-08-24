const roomIdReducer = (state = {roomId: ""}, action) => {
    if(action.type === 'roomId/setRoomId') {
        return {
            ...state, 
            roomId: action.payload,
        }
    }
    return state
}

export default roomIdReducer