import {baseUrl} from "../../utils/constants";

export const REQUEST_EDIT = 'REQUEST_EDIT'
export const ERROR_EDIT = 'ERROR_EDIT';
export const SUCCESS_EDIT = 'SUCCESS_EDIT';
export const FINISH_EDIT = 'FINISH_EDIT';


export const requestEditAction = () => (
    {
        type: REQUEST_EDIT,
        payload: 'loading...'
    }
)

export const errorEditAction = (message) => (
    {
        type: ERROR_EDIT,
        payload: message
    }
)

export const successEditAction = (user) => (
    {
        type: SUCCESS_EDIT,
        user,
        message: 'saved'
    }
)

export const finishEditAction = () => (
    {
        type: FINISH_EDIT
    }
)

export const editUserAction = (updatedUser, token, login) => {
    console.log(updatedUser);
    console.log(token);
    console.log(login);
    return (dispatch) => {
        dispatch(requestEditAction());
        fetch(`${baseUrl}/user/${login}`, {
            method: 'PUT',
            body: JSON.stringify(updatedUser),
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
            .then(profile => {
                dispatch(successEditAction(profile));
                setTimeout(() => dispatch(finishEditAction()), 1500);
            })
            .catch(e => {
                dispatch(errorEditAction(e.message));
            });

    }
}

