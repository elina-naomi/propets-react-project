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

const Navigation = () => {
    // При обновлении страницы чтобы соответствующий пункт навигации тоже выделялся
    const pathArray = window.location.href.split('/');
    let path = pathArray[pathArray.length - 1];
    if(path==='activities') {
        path='profile';
    }
    const [key, setKey] = useState(path);

    const services = ['services', 'hotels', 'walking', 'fostering', 'vethelp'];

    const [submenuExpanded, setSubmenuExpanded] = useState({
        display: 'd-none',
        greenWrapper: '',
        servicesItem: ''
    })

    useEffect(() => {
        if (path === 'hotels' || path === 'walking' || path === 'fostering' || path === 'vethelp') {
            setSubmenuExpanded({
                display: '',
                greenWrapper: 'greenWrapper',
                servicesItem: 'servicesItem'
            })
        }
        return () => console.log('Component Home is unmounted');
    }, [path]);


    return (
        <Nav
            onSelect={(selectedKey) => {
                setKey(selectedKey);
                if (selectedKey === "services") {
                    setSubmenuExpanded({
                        display: '',
                        greenWrapper: 'greenWrapper',
                        servicesItem: 'servicesItem'
                    })
                }
                // Проверка, что не нажат пункт меню, не входящий в Services. Если так, скрыть подменю
                let res = false;
                for (let i = 0; i < services.length; i++) {
                    res = res || selectedKey === services[i];
                    if (res) {
                        break;
                    }
                }
                if (!res) {
                    setSubmenuExpanded({
                        display: 'd-none',
                        greenWrapper: '',
                        servicesItem: ''
                    });
                }


            }}
            as='ul'
            activeKey={key}
            bsPrefix={`${styles.sideBarNav} mt-3 pl-0`}
            className='leftNavigation'>
            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white  text-decoration-none'
                          as={Link}
                          eventKey="main"
                          to={`/${mainPage}`}>
                    <FaHome className='mr-3'/>Home
                </Nav.Link>
            </NavItem>
            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white  text-decoration-none'
                          as={Link}
                          eventKey="lost"
                          to={`/${lostPage}`}
                >
                    <FaSearch className='mr-3'/>Lost
                </Nav.Link>
            </NavItem>

            <NavItem as='li'>
                <Nav.Link bsPrefix={styles.linkItem}
                          className='py-1 text-white  text-decoration-none'
                          as={Link}
                          eventKey="found"
                          to={`/${foundPage}`}>
                    <FaPaw className='mr-3'/>Found
                </Nav.Link>
            </NavItem>


            <NavItem as='li'>

                <div className={styles[submenuExpanded.greenWrapper]}>

                    <Nav.Link bsPrefix={styles.linkItem}
                              className='text-white text-decoration-none'
                              as={Link}
                              eventKey="services">

                        <div className={`py-1 ${styles[submenuExpanded.servicesItem]}`}>
                            <FaBullhorn className='mr-3'/>Services
                        </div>

                    </Nav.Link>


                    <Nav onSelect={eventKey => {
                        setKey(eventKey)

                    }} bsPrefix={styles.linkItem}
                         activeKey={key}
                         className={`py-1 text-white 
                         ${styles.subMenu} subMenu 
                         ${submenuExpanded.display}`}
                         as='ul'>
                        <NavItem as='li'>
                            <Nav.Link bsPrefix={styles.linkItem}
                                      className='pt-1 text-white text-decoration-none'
                                      as={Link}
                                      eventKey="hotels"
                                      to={`/${servicesPage}/${hotelsPage}`}>
                                <FaHotel className='mr-3'/>Hotels
                            </Nav.Link>
                        </NavItem>

                        <NavItem as='li'>
                            <Nav.Link bsPrefix={styles.linkItem}
                                      className='text-white text-decoration-none'
                                      as={Link}
                                      eventKey="walking"
                                      to={`/${servicesPage}/${walkingPage}`}>
                                <FaWalking className='mr-3'/>Walking
                            </Nav.Link>
                        </NavItem>

                        <NavItem as='li'>
                            <Nav.Link bsPrefix={styles.linkItem}
                                      className='text-white text-decoration-none'
                                      as={Link}
                                      eventKey="fostering"
                                      to={`/${servicesPage}/${fosteringPage}`}>
                                <FaDog className='mr-3'/>Fostering
                            </Nav.Link>
                        </NavItem>

                        <NavItem as='li'>
                            <Nav.Link bsPrefix={styles.linkItem}
                                      className='pb-1 text-white text-decoration-none'
                                      as={Link}
                                      eventKey="vethelp"
                                      to={`/${servicesPage}/${vethelpPage}`}>
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
                          eventKey="favourites"
                          to={`/${favouritesPage}`}>
                    <FaStar className='mr-3'/>Favourites
                </Nav.Link>
            </NavItem>

            <ProfileBar marginTopProfileBar={styles.marginTopProfileBar}/>
        </Nav>
    );
};

export default Navigation;