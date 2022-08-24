import {combineReducers} from 'redux';
import nicknameReducer from './nicknameReducer.js';
import roomIdReducer from './roomIdReducer.js'

const rootReducer = combineReducers({
    nicknameReducer,
    roomIdReducer,
});

export default rootReducer;