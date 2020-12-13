import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaPaw} from "react-icons/all";
import {Link} from "react-router-dom";
import {newFoundPostPage} from "../../utils/constants";

const ButtonFoundPet = () => {
    return (
        <Link to={`/${newFoundPostPage}`} className={`${buttonStyles.functionButton} ${buttonStyles.foundPetButton}`}>
            <FaPaw color='white' className={`${buttonStyles.buttonIcon}`}/>I found a pet
        </Link>
    );
};

export default ButtonFoundPet;