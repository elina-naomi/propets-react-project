import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaSave} from "react-icons/all";


const ButtonSaveChanges = () => {
    return (
        <a className={`${buttonStyles.functionButton} ${buttonStyles.saveChangesButton}`} href="#">
            <FaSave color='white' className={`${buttonStyles.buttonIcon} ${buttonStyles.saveIcon}`}/>Save changes</a>
    );
};

export default ButtonSaveChanges;