import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaPaw} from "react-icons/all";
import {Link} from "react-router-dom";
import {newFoundPostPage} from "../../utils/constants";

const ButtonPublish = () => {
    return (
        <Link to={``} className={`${buttonStyles.functionButton} ${buttonStyles.foundPetButton} px-5`}>
            <FaPaw color='white' className={`${buttonStyles.buttonIcon}`}/>Publish
        </Link>
    );
};

export default ButtonPublish;