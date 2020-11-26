import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaSignOutAlt} from "react-icons/all";


const ButtonLogOut = (props) => {
    return (
        <div className={`${props.marginLeft} ${props.marginTop}`}>
            <a className={`${buttonStyles.functionButton} ${buttonStyles.logoutButton}`} href="#">
                <FaSignOutAlt color='white' className={`${buttonStyles.buttonIcon} ${buttonStyles.logoutIcon}`}/>Log out</a>
        </div>

    );
};

export default ButtonLogOut;