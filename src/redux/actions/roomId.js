const roomId = (roomId) => {
    return {
        type: 'roomId/setRoomId',
        payload: roomId
    }
}

export default roomId