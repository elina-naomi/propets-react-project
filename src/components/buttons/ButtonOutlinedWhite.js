import React from 'react';
import styles from "../../css_modules/buttons.module.css";

const ButtonOutlinedWhite = (props) => {
    return (
        <a className={`${styles.formButton} ${styles.outlinedButton} ${props.marginRight}`} href="#">Cancel</a>
    );
};

export default ButtonOutlinedWhite;