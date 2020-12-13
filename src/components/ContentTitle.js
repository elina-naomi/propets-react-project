import React from 'react';
import styles from '../css_modules/contenttitle.module.css';


// Сделать switch в зависимости от того, какая это страница - такой заголовок
const title = 'Change, edit and manage your data.'

const ContentTitle = () => {
    return (
        <p className={`${styles.contentTitle} my-4 py-2 ml-3`}>
            <span className='font-weight-bold'>Your profile.</span> {title}
        </p>
    );
};

export default ContentTitle;