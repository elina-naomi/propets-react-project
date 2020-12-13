import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaPaw} from "react-icons/all";
import {Link} from "react-router-dom";
import {newFoundPostPage} from "../../utils/constants";

const ButtonPublish = () => {
    return (
        <span className={`${buttonStyles.functionButton} ${buttonStyles.foundPetButton} ${buttonStyles.publishButton} px-5`}>
            <FaPaw color='white' className={`${buttonStyles.buttonIcon}`}/>Publish</span>
    );
};

export default ButtonPublish;