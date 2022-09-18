import { selector } from "recoil";
import userState from './userState';


const isValidUser = selector({
    key: 'isValidUser', 
    get: ({get}) => {
        const originalUserState = get(userState);
        return originalUserState.verification
    }
})

const userNickname = selector({
    key: 'userNickName',
    get: ({get}) => {
        const originalUserState = get(userState);
        if (originalUserState.nickname) {
            return originalUserState.nickname
        } else {
            return null
        }
    }
})

export {isValidUser, userNickname}