import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import logo from '../images/Group 1.svg';


const HeaderGreen = (props) => {
    return (
        <header className="jumbotron-fluid nav-wrapper py-0">
            <div className="container-xl">

                <Navbar collapseOnSelect expand="sm" variant="dark" className='py-2'>
                    <Navbar.Brand href="/home" className='mt-2'>
                        <img src={logo} alt="ProPets logo"/>
                    </Navbar.Brand>

                    <Navbar.Toggle className='start-burger pr-4 pl-0' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav onSelect={eventKey => {
                            switch (eventKey) {
                                default: props.signIn();
                            }
                        }} className="ml-auto">
                            <Nav.Link eventKey={"signIn"} className='sign-in-button'>Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default HeaderGreen;