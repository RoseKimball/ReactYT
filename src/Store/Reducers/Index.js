import apiReducer from './Api';
import { combineReducers } from 'redux';

export default combineReducers({
    api: apiReducer
})

// export default function(state={}, action) {
//     switch(action.type) {
//         default:
//         return state;
//     }
// }