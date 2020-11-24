import React from 'react';
import {NavDropdown, Nav, NavItem} from "react-bootstrap";
import styles from "../css_modules/navigation.module.css";
import {Link} from "react-router-dom";
import {FaBullhorn, FaHome, FaPaw, FaSearch, FaStar} from "react-icons/all";

const Navigation = () => {
    return (
        <Nav
            as='ul'
            defaultActiveKey="link-0"
            bsPrefix={`${styles.sideBarNav} my-3 pl-0`}
            className='leftNavigation'>
            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white'
                          as={Link}
                          eventKey="link-0"
                          to="/main">
                    <FaHome className='mr-3'/>Home
                </Nav.Link>
            </NavItem>
            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white'
                          as={Link}
                          eventKey="link-1"
                          to="/lost">
                    <FaSearch className='mr-3'/>Lost
                </Nav.Link>
            </NavItem>

            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white'
                          as={Link}
                          eventKey="link-2"
                          to="/found">
                    <FaPaw className='mr-3'/>Found
                </Nav.Link>
            </NavItem>


            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white'
                          as={Link}
                          eventKey="link-3"
                          // to="/main"
                >
                    <FaBullhorn className='mr-3'/>Services
                </Nav.Link>
            </NavItem>
            {/*<NavItem as='li'>*/}

            {/*    <NavDropdown bsPrefix={styles.linkItem} className='py-1 text-white' title="Services" id="nav-dropdown">*/}
            {/*        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>*/}
            {/*        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>*/}
            {/*        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>*/}
            {/*        <NavDropdown.Divider/>*/}
            {/*        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>*/}
            {/*    </NavDropdown>*/}
            {/*</NavItem>*/}


            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white'
                          as={Link}
                          eventKey="link-4"
                    // to="/main"
                >
                    <FaStar className='mr-3'/>Favorites
                </Nav.Link>
            </NavItem>

        </Nav>
    );
};

export default Navigation;