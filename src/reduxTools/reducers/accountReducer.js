import {ERROR_LOGIN, REQUEST_LOGIN, SUCCESS_LOGIN} from "../actions/loginActions";
import {LOGOUT} from "../actions/logoutAction";

export const accountReducer = (state, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {...state, message: action.payload};
        case ERROR_LOGIN:
            return {...state, message: action.payload};
        case SUCCESS_LOGIN:
            localStorage.setItem('token', action.token);
            return {...state, user: action.user, token: action.token, message: null};
        case LOGOUT:
            localStorage.removeItem('token');
            return {...state, user: null, token: null, message: null};
        default:
            return state;
    }
}