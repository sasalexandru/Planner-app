import { LOGIN, REGISTER } from "../actionTypes/actionTypes";
import { authState } from "../reduxStates/authState";

function authReducer(state = authState, action){
    switch(action.type){
        case LOGIN:{
            return state;
        }
        case REGISTER:{
            return state;
        }
        default:
            return state;
    }
}

export default authReducer;
