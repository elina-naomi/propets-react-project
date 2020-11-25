import React, {Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import logo from "../images/Group 1-green.svg";
import styles from '../css_modules/headerWhite.module.css'
import ButtonAddNewPost from "./buttons/ButtonAddNewPost";
import ButtonFoundPet from "./buttons/ButtonFoundPet";
import ButtonLostPet from "./buttons/ButtonLostPet";
import {Route, Switch} from "react-router-dom";
import {
    favouritesPage,
    fosteringPage,
    foundPage,
    hotelsPage,
    lostPage,
    mainPage,
    servicesPage,
    vethelpPage,
    walkingPage
} from "../utils/Constants";
import Navigation from "./Navigation";

const HeaderWhite = () => {
    return (
        <header className={`jumbotron-fluid nav-wrapper py-0 ${styles.whiteHeader}`}>
            <div className="container-xl">

                <Navbar
                    // collapseOnSelect
                    expand="sm"
                    variant="light" className='py-2 px-0'>
                    <Navbar.Brand href="/home" className='mt-2'>
                        <img src={logo} alt="ProPets logo"/>
                    </Navbar.Brand>
                    <div className='greenBurger'>
                        <Navbar.Toggle className={`start-burger pr-4 pl-0`} aria-controls="responsive-navbar-nav"/>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Switch>
                                <Route
                                    path={[`/${mainPage}`, `/${favouritesPage}`, `/${servicesPage}/${hotelsPage}`, `/${servicesPage}/${walkingPage}`,
                                        `/${servicesPage}/${fosteringPage}`, `/${servicesPage}/${vethelpPage}`]}
                                    exact component={ButtonAddNewPost}/>
                                <Route path={[`/${lostPage}`, `/${foundPage}`]} exact>{
                                    <Fragment>
                                        <ButtonLostPet margin='mr-3'/>
                                        <ButtonFoundPet/>
                                    </Fragment>

                                }</Route>

                            </Switch>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default HeaderWhite;