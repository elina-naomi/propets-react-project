import {baseUrl} from "../../utils/constants";
import React from "react";

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';

export const requestLoginAction = () => (
    {
        type: REQUEST_LOGIN,
        payload: 'loading...'
    }
)

export const errorLoginAction = () => (
    {
        type: ERROR_LOGIN,
        payload: 'Entered data is incorrect. Please try again.'
    }
)

export const successLoginAction = (user, token) => (
    {
        type: SUCCESS_LOGIN,

            user, token

    }
)

export const loginAction = (token) => {
    return dispatch => {
        dispatch(requestLoginAction());

        fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                // пусть будет в reducere
                // localStorage.setItem('token', JSON.stringify(token));
                dispatch(successLoginAction(data, token));

            })
            .catch(e => {
                console.log(e);
                dispatch(errorLoginAction());
            })


    }
}