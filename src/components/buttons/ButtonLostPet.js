import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaSearch} from "react-icons/all";
import {Link} from "react-router-dom";
import {newLostPostPage} from "../../utils/constants";

const ButtonLostPet = (props) => {
    return (
        <Link to={`/${newLostPostPage}`}
              className={`${buttonStyles.functionButton} ${buttonStyles.lostPetButton} ${props.margin}`}>
            <FaSearch color='#393939' className={`${buttonStyles.buttonIcon}`}/>I lost my pet
        </Link>

    );
};

export default ButtonLostPet;