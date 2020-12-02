import {ERROR_LOGIN, REQUEST_LOGIN, SUCCESS_LOGIN} from "../actions/loginActions";
import {LOGOUT} from "../actions/logoutAction";
import {ERROR_REGISTER, REQUEST_REGISTER, SUCCESS_REGISTER} from "../actions/registerActions";
import {ERROR_EDIT, REQUEST_EDIT, SUCCESS_EDIT} from "../actions/editActions";

export const accountReducer = (state, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {...state, messageLogin: action.payload};
        case ERROR_LOGIN:
            return {...state, messageLogin: action.payload};
        case SUCCESS_LOGIN:
            localStorage.setItem('token', action.token);
            localStorage.setItem('user', JSON.stringify(action.user));
            return {...state, user: action.user, token: action.token, messageLogin: null};
        case REQUEST_REGISTER:
            return {...state, messageRegister: action.payload};
        case ERROR_REGISTER:
            return {...state, messageRegister: action.payload};
        case SUCCESS_REGISTER:
            localStorage.setItem('token', action.token);
            localStorage.setItem('user', JSON.stringify(action.user));
            return {...state, user: action.user, token: action.token, messageRegister: null};
        // case REQUEST_EDIT:
        //     return {...state, messageEdit: action.payload};
        // case ERROR_EDIT:
        //     return {...state, messageEdit: action.payload};
        // case SUCCESS_EDIT:
        //     return:
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {...state, user: null, token: null, messageLogin: null, messageRegister: null};
        default:
            return state;
    }
}