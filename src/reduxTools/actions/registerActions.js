import {createToken} from "../../utils/constants";
import {baseUrl} from "../../utils/constants";
import {SUCCESS_LOGIN} from "./loginActions";

export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const ERROR_REGISTER = 'ERROR_REGISTER';
export const SUCCESS_REGISTER = 'SUCCESS_REGISTER';

export const requestRegisterAction = () => (
    {
        type: REQUEST_REGISTER,
        payload: 'loading...'
    }
)

export const errorRegisterAction = (message) => (
    {
        type: ERROR_REGISTER,
        payload: message
    }
)

export const successRegisterAction = (user, token) => (
    {
        type: SUCCESS_REGISTER,

        user, token

    }
)

export const registerAction = (user) => {
    // console.log(user);
    // const token = createToken(user.userLogin, user.password);

    let token = '';
    return (dispatch) => {
        dispatch(requestRegisterAction());
        fetch(`${baseUrl}/registration`, {
            method: 'Post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    token = response.headers.get('X-Token');
                    return response.json()

                } else {
                    console.log(response);
                    if (response.status === 403) {
                        throw new Error('The entered password does not meet the requirements');
                    }
                    if (response.status === 409) {
                        throw new Error('User with the same name already exists.');
                    }

                }
            })
            .then(profile => {
                dispatch(successRegisterAction(profile, token))
            })
            .catch(e => {
                dispatch(errorRegisterAction(e.message));
                console.log(e.message)
            });
    }
};