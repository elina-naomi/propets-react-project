import React, {useEffect, useState} from 'react';
import {Nav, NavItem} from "react-bootstrap";
import styles from "../css_modules/navigation.module.css";
import {Link} from "react-router-dom";
import {FaBullhorn, FaDog, FaHome, FaHotel, FaPaw, FaSearch, FaStar, FaStethoscope, FaWalking} from "react-icons/all";
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
} from "../utils/constants";
import ProfileBar from "../reduxTools/containers/ProfileBarContainer";

const Navigation = ({location}) => {

    const initialSubmenuState = {
        display: 'd-none',
        greenWrapper: ''
    };

    const [submenuExpanded, setSubmenuExpanded] = useState(initialSubmenuState);

    useEffect(() => {
        if(location.pathname.includes('services')) {
            setSubmenuExpanded({
                display: '',
                greenWrapper: 'greenWrapper',
                servicesItem: 'servicesItem'
            })
        } else {
            setSubmenuExpanded(initialSubmenuState);
        }
        return () => {
            console.log('Component Navigation is unmounted');
        }
    },[location]);


    return (
        <Nav
            as='ul'
            activeKey={location.pathname.split('/')[1]}

            bsPrefix={`${styles.sideBarNav} mt-3 pl-0`}
            className='leftNavigation'>
            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white  text-decoration-none'
                          as={Link}
                          eventKey={'main'}
                          to={`/${mainPage}`}
                >
                    <FaHome className='mr-3'/>Home
                </Nav.Link>
            </NavItem>
            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white  text-decoration-none'
                          as={Link}
                          eventKey={'lost'}
                          to={`/${lostPage}`}
                >
                    <FaSearch className='mr-3'/>Lost
                </Nav.Link>
            </NavItem>

            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white  text-decoration-none'
                          as={Link}
                          eventKey={'found'}
                          to={`/${foundPage}`}>
                    <FaPaw className='mr-3'/>Found
                </Nav.Link>
            </NavItem>


            <NavItem as='li'>

                <div className={styles[submenuExpanded.greenWrapper]}>

                    <Nav.Link bsPrefix={styles.linkItem}
                              className='text-white text-decoration-none'
                              as={Link}
                              eventKey='services'
                              to={`/${servicesPage}/${hotelsPage}`}>

                        <div className={`py-1`}>
                            <FaBullhorn className='mr-3'/>Services
                        </div>

                    </Nav.Link>


                    <Nav
                        bsPrefix={styles.linkItem}
                         activeKey={location.pathname.split('/')[2]}
                         className={`py-1 text-white 
                         ${styles.subMenu} subMenu 
                         ${submenuExpanded.display}`}
                         as='ul'>
                        <NavItem as='li'>
                            <Nav.Link bsPrefix={styles.linkItem}
                                      className='pt-1 text-white text-decoration-none'
                                      as={Link}
                                      eventKey={`hotels`}
                                      to={`/${servicesPage}/${hotelsPage}`}>
                                <FaHotel className='mr-3'/>Hotels
                            </Nav.Link>
                        </NavItem>

                        <NavItem as='li'>
                            <Nav.Link bsPrefix={styles.linkItem}
                                      className='text-white text-decoration-none'
                                      as={Link}
                                      eventKey={`walking`}
                                      to={`/${servicesPage}/${walkingPage}`}>
                                <FaWalking className='mr-3'/>Walking
                            </Nav.Link>
                        </NavItem>

                        <NavItem as='li'>
                            <Nav.Link bsPrefix={styles.linkItem}
                                      className='text-white text-decoration-none'
                                      as={Link}
                                      eventKey={`fostering`}
                                      to={`/${servicesPage}/${fosteringPage}`}>
                                <FaDog className='mr-3'/>Fostering
                            </Nav.Link>
                        </NavItem>

                        <NavItem as='li'>
                            <Nav.Link bsPrefix={styles.linkItem}
                                      className='pb-1 text-white text-decoration-none'
                                      as={Link}
                                      eventKey={`vethelp`}
                                      to={`/${servicesPage}/${vethelpPage}`}
                            >
                                <FaStethoscope className='mr-3'/>VetHelp
                            </Nav.Link>
                        </NavItem>
                    </Nav>
                </div>
            </NavItem>


            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white text-decoration-none'
                          as={Link}
                          eventKey={'favourites'}
                          to={`/${favouritesPage}`}>
                    <FaStar className='mr-3'/>Favourites
                </Nav.Link>
            </NavItem>

            <ProfileBar marginTopProfileBar={styles.marginTopProfileBar} location={location}/>
        </Nav>
    );
};

export default Navigation;