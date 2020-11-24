import React from 'react';
import styles from "../css_modules/content.module.css";

const Content = (props) => {
    return (
        <div className={`${props.colQuantity} bg-white ${styles.mainContent} `}>

        </div>
    );
};

export default Content;