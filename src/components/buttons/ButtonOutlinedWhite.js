import React from 'react';
import styles from "../../css_modules/buttons.module.css";

const ButtonOutlinedWhite = (props) => {
    return (
        <span className={`${styles.formButton} ${styles.outlinedButton} ${props.marginRight}`}
        >Cancel</span>
    );
};

export default ButtonOutlinedWhite;