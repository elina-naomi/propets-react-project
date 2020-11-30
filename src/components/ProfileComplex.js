import React, {useState} from 'react';
import styles from "../css_modules/tabs.module.css";
import {Nav, Form, FormLabel, Modal, Tab, Tabs} from "react-bootstrap";
import profileStyles from '../css_modules/profile.module.css';
import avatar from "../images/avatar.png";
import {FaCamera, FaPen, FaPencilAlt} from "react-icons/all";
import {Link} from "react-router-dom";
import {activitiesPage, mainPage, profilePage} from "../utils/constants";

const ProfileComplex = () => {
    const pathArray = window.location.href.split('/');
    const path = pathArray[pathArray.length - 1];
    const [key, setKey] = useState(path);

    const [name, setName] = useState('Ann Smith');
    const [email, setEmail] = useState('annsmith@gmail.com');
    const [phone, setPhone] = useState('');
    const [fbLink, setFbLink] = useState('');


    return (
        <div className={`${profileStyles.shadow} profileTabs`}>
            <div className={`${styles.signUpTabs} border-bottom-0`}>
                <Tab.Container onSelect={eventKey => (
                    setKey(eventKey)
                )}
                               activeKey={key}
                               id="left-tabs-example">

                    <Nav
                        variant="pills" className='d-flex'>
                        <Nav.Item className={`${styles.tab} w-50`}>
                            <Nav.Link
                                as={Link}
                                to={`/${profilePage}`}
                                eventKey="profile">My profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`${styles.tab} w-50`}>
                            <Nav.Link
                                as={Link}
                                to={`/${activitiesPage}`}

                                eventKey="activities">Activities</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="profile">
                            <div className='row align-items-end'>
                                <div className='col-sm-8 col-12 text-right align-self-stretch'>
                                    <div className={`d-flex align-items-center ml-3 mt-4`}>
                                        <div className={`${profileStyles.profilePhoto}`}>
                                            <img className={`${profileStyles.avatar}`} src={avatar}/>
                                            <span className={`${profileStyles.photoIconWrapper} d-flex align-items-center justify-content-center`}>
                                        <FaCamera color='#84B6A3' size='0.7em'/>
                                    </span>
                                        </div>

                                        <p className={`${profileStyles.name} ml-4`}>{name}</p>
                                        <FaPencilAlt color='#BABABA' size='0.7em' className='ml-2'/>
                                    </div>
                                    <Form className='w-100 mt-4 pr-2 mb-5'>
                                        <div>
                                            <FormLabel htmlFor='email'
                                                       className={`${styles.label}`}>Email:</FormLabel>
                                            <input id='email' value={email} type='text' placeholder='Enter your email'
                                                   className={`ml-3 ${styles.inputs} ${profileStyles.inputs}`}
                                                   onChange={event => {
                                                       setEmail(event.target.value);
                                                   }}/>
                                        </div>
                                        <div>
                                            <FormLabel htmlFor='phone'
                                                       className={`${styles.label}`}>Phone:</FormLabel>
                                            <input id='phone' value={phone} type='text' placeholder='Enter your phone'
                                                   className={`ml-3 ${styles.inputs} ${profileStyles.inputs}`}
                                                   onChange={event => {
                                                       setPhone(event.target.value);
                                                   }}
                                            /></div>
                                        <div>
                                            <FormLabel htmlFor='fblink'
                                                       className={`${styles.label}`}>FB link:</FormLabel>
                                            <input id='fblink' value={fbLink} type='text'
                                                   placeholder='Enter your FB link'
                                                   className={`ml-3 ${styles.inputs} ${profileStyles.inputs}`}
                                                   onChange={event => {
                                                       setFbLink(event.target.value);
                                                   }}/>
                                        </div>

                                    </Form>

                                </div>
                            </div>

                        </Tab.Pane>

                        <Tab.Pane eventKey="activities">


                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    );
};

export default ProfileComplex;