const setNickname = (nickname) => {
    return {
        type: 'nickname/setNickname',
        payload: nickname
    }
}

export default setNickname