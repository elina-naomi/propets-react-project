import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaPlus} from "react-icons/all";
import {Link} from "react-router-dom";
import {newMessagePostPage} from "../../utils/constants";


const ButtonAddNewPost = () => {
    return (

        <Link to={`/${newMessagePostPage}` }
              className={`${buttonStyles.functionButton} ${buttonStyles.addPostButton}`}>
            <FaPlus color='white' className={`${buttonStyles.buttonIcon}`}/>Add new
        </Link>

    );
};

export default ButtonAddNewPost;