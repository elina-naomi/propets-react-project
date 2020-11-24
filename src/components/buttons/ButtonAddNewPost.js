import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaPlus} from "react-icons/all";


const ButtonAddNewPost = () => {
    return (
        <a className={`${buttonStyles.functionButton} ${buttonStyles.addPostButton}`} href="#">
            <FaPlus color='white' className={`${buttonStyles.buttonIcon}`}/>Add new</a>
    );
};

export default ButtonAddNewPost;