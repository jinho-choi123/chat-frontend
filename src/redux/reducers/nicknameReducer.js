const nicknameReducer = (state = {nickname: ""}, action) => {
    if (action.type === 'nickname/setNickname') {
        return {
            ...state,
            nickname: action.payload,
        }
    }
    return state
}

export default nicknameReducer