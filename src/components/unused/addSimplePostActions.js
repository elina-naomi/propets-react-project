import {baseUrl} from "../../utils/constants";
import {errorEditAction, finishEditAction, requestEditAction, successEditAction} from "../../reduxTools/actions/editActions";

export const REQUEST_ADD_POST = 'REQUEST_ADD_POST'
export const ERROR_ADD_POST = 'ERROR_ADD_POST';
export const SUCCESS_ADD_POST = 'SUCCESS_ADD_POST';


export const requestAddPostAction = () => (
    {
        type: REQUEST_ADD_POST,
        payload: 'loading...'
    }
)

export const errorAddPostAction = (message) => (
    {
        type: ERROR_ADD_POST,
        payload: message
    }
)

export const successAddPostAction = (post) => (
    {
        type: SUCCESS_ADD_POST,
        post
    }
)

export const addPostAction = (token, login, newPost) => {
    return (dispatch) => {
        dispatch(requestAddPostAction());
        fetch(`${baseUrl}/post/${login}`, {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json',
                'X-Token': token
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log('ok');
                    return response.json()
                } else {
                    if (response.status === 409) {
                        throw new Error('User with the same name already exists.');
                    }
                }
            })
            .then(post => {
                dispatch(successEditAction(profile));
            })
            .catch(e => {
                dispatch(errorEditAction(e.message));
            });

    }
}

