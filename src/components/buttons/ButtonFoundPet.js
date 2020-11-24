import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaPaw} from "react-icons/all";

const ButtonFoundPet = () => {
    return (
        <a className={`${buttonStyles.functionButton} ${buttonStyles.foundPetButton}`} href="#">
            <FaPaw color='white' className={`${buttonStyles.buttonIcon}`}/>I found a pet</a>
    );
};

export default ButtonFoundPet;