import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaSearch} from "react-icons/all";

const ButtonLostPet = (props) => {
    return (
        <a className={`${buttonStyles.functionButton} ${buttonStyles.lostPetButton} ${props.margin}`} href="#">
            <FaSearch color='#393939' className={`${buttonStyles.buttonIcon}`}/>I lost my pet</a>
    );
};

export default ButtonLostPet;