import React, {Fragment} from 'react';
import styles from '../css_modules/profileBar.module.css'
import avatar from '../images/avatar.png'
import ButtonLogOut from "./buttons/ButtonLogOut";
import {Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import {activitiesPage, profilePage} from "../utils/constants";
import stylesNav from "../css_modules/navigation.module.css";
import {FaCamera} from "react-icons/all";


const ProfileBar = (props) => {
    console.log(props);

    function handleClickLogout() {
        console.log('oops');
        props.logout();
    }

    let pathProfile = 'profile';

    if(props.location.pathname ===`/${activitiesPage}`) {
        console.log('oops');
        pathProfile='activities';
    }

    return (

    <Fragment>
        <NavItem as='li' className={`${styles.wrapper} ${props.marginTopProfileBar}`}>
            <Nav.Link bsPrefix={stylesNav.linkItem}
                      className='mt-3 py-1 text-white text-decoration-none'
                      as={Link}
                      eventKey={pathProfile}
                      to={`/${profilePage}`}>
                <div className='d-flex align-items-center'>
                    <img className={`${styles.avatar}`} src={props.avatar}/>

                    <p className={`${styles.name} ml-2`}>{props.userName}</p>
                </div>
            </Nav.Link>
            <ButtonLogOut marginLeft='ml-4' marginTop='mt-5'
                          logout={handleClickLogout}/>
        </NavItem>
        
    </Fragment>

    );
};

export default ProfileBar;