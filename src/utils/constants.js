import {Spinner} from "react-bootstrap";
import stylesMessage from "../css_modules/statusmessage.module.css";
import React from "react";

export const startPage = 'home';
export const mainPage = 'main';
export const lostPage = 'lost';
export const foundPage = 'found';
export const favouritesPage = 'favourites';
export const profilePage = 'profile';
export const activitiesPage = 'activities';

export const servicesPage = 'services';
export const hotelsPage = 'hotels';
export const walkingPage = 'walking';
export const fosteringPage = 'fostering';
export const vethelpPage = 'vethelp';

export const newMessagePostPage = 'post';
export const newLostPostPage = 'new-lost';
export const newFoundPostPage = 'new-found';



export const baseUrl = 'https://app-propets-account.herokuapp.com/account/en/v1';
export const baseUrlMessaging = 'https://app-propets-messaging.herokuapp.com/message/en/v1'

export const createToken = (login, password) => {
    return 'Basic ' + btoa(`${login}:${password}`);
};

export const displayMessage= (message) => {

    // Если загрузка
    if (message === 'loading...') {
        return <Spinner animation="border" size="sm" className={stylesMessage.spinner}/>
    }
    // Если сообщение с ошибкой, или его нет
    else {
        return <span className={stylesMessage.statusMessage}>{message}</span>;
    }

}