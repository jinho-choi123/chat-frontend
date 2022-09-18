import { atom } from "recoil";

const userState = atom({
    key: 'loginState',
    default: {
        verification: false
    }
});

export default userState