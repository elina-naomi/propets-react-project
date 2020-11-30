import React from 'react';
import styles from '../css_modules/profileBar.module.css'
import avatar from '../images/avatar.png'
import ButtonLogOut from "./buttons/ButtonLogOut";
import {Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import {profilePage} from "../utils/constants";
import stylesNav from "../css_modules/navigation.module.css";
import {FaCamera} from "react-icons/all";


const ProfileBar = (props) => {
    console.log(props);

    function handleClickLogout() {
        console.log('oops');
        props.logout();
    }

    return (
        // <div className={`${styles.wrapper}`}>
        //     <div className='d-flex align-items-center mt-3'>
        //         <img className={`${styles.avatar}`} src={avatar}/>
        //         <p className={`${styles.name} ml-2`}>Ann Smith</p>
        //     </div>
        //     <ButtonLogOut marginLeft='ml-4' marginTop='mt-5'/>
        // </div>

    <NavItem as='li' className={`${styles.wrapper} ${props.marginTopProfileBar}`}>
        <Nav.Link bsPrefix={stylesNav.linkItem}
                  className='mt-3 py-1 text-white text-decoration-none'
                  as={Link}
                  eventKey="profile"
                  to={`/${profilePage}`}>
            <div className='d-flex align-items-center'>
                <img className={`${styles.avatar}`} src={props.avatar}/>

                <p className={`${styles.name} ml-2`}>{props.userName}</p>
            </div>
        </Nav.Link>
        <ButtonLogOut marginLeft='ml-4' marginTop='mt-5'
                      logout={handleClickLogout}/>
    </NavItem>
    );
};

export default ProfileBar;