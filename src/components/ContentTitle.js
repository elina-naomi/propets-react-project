import React, {useEffect, useState} from 'react';
import styles from '../css_modules/contenttitle.module.css';
import {activitiesPage, newFoundPostPage, newLostPostPage, newMessagePostPage, profilePage} from "../utils/constants";


// Сделать switch в зависимости от того, какая это страница - такой заголовок
// Добавить также в Services (Hotels, Walking, Fostering, VetHelp) & Favourites, Confirmation lost/found post

const ContentTitle = () => {

    const [titleBold, setTitleBold] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        const pathArray = window.location.href.split('/');
        let path = pathArray[pathArray.length - 1];
        switch (path) {
            case profilePage:
            case activitiesPage:
                setTitleBold('Your profile.');
                setTitle('Change, edit and manage your data.');
                return;
            case newMessagePostPage:
                setTitleBold('Your new post!');
                setTitle('Simply text, add photos and publish.');
                return;
            case newLostPostPage:
                setTitleBold('Lost your buddy?');
                setTitle('Keep calm and complete the form.');
                return;
            case newFoundPostPage:
                setTitleBold('Found a pet?');
                setTitle('Please complete the form to help.');
                return;
        }
    },[]);

    return (

        <p className={`${styles.contentTitle} my-4 py-2 ml-3`}>
            <span className='font-weight-bold'>{titleBold}</span> {title}
        </p>
    );
};

export default ContentTitle;