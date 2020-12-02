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
    let newToken='';
    let headers ='';
    const flag = token.toString().includes('Basic');
    if(flag) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    } else {
        headers = {
            'Content-Type': 'application/json',
            'X-Token': token
        }
    }
    return dispatch => {
        dispatch(requestLoginAction());

        console.log(token);

        fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers
        })
            .then(response => {
                if (response.ok) {
                    if (flag) {
                        newToken = response.headers.get('X-Token');
                    } else {
                        newToken = token;
                    }
                    return response.json()
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                dispatch(successLoginAction(data, newToken));

            })
            .catch(e => {
                console.log(e);
                dispatch(errorLoginAction());
            })


    }
}