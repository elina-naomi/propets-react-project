import React from 'react';
import styles from '../css_modules/contenttitle.module.css'

const ContentTitle = () => {
    return (
        <p className={`${styles.contentTitle} my-4 py-2 ml-3`}>
            <span className='font-weight-bold'>Your profile.</span> Change, edit and manage your data.
        </p>
    );
};

export default ContentTitle;