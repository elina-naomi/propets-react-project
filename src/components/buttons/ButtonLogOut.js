import React from 'react';
import buttonStyles from "../../css_modules/buttons.module.css";
import {FaSignOutAlt} from "react-icons/all";


const ButtonLogOut = (props) => {
    return (
        <div className={`${props.marginLeft} ${props.marginTop}`}
        onClick={props.logout}
        >
            <span className={`${buttonStyles.functionButton} ${buttonStyles.logoutButton}`}>
                <FaSignOutAlt color='white' className={`${buttonStyles.buttonIcon} ${buttonStyles.logoutIcon}`}/>Log out</span>
        </div>

    );
};

export default ButtonLogOut;