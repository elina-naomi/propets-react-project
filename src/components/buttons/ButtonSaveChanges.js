import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaSave} from "react-icons/all";


const ButtonSaveChanges = () => {
    return (
        <span className={`${buttonStyles.functionButton} ${buttonStyles.saveChangesButton}`}>
            <FaSave color='white' className={`${buttonStyles.buttonIcon} ${buttonStyles.saveIcon}`}/>Save changes</span>
    );
};

export default ButtonSaveChanges;