import React, {useState} from 'react';
import styles from "../../css_modules/tabs.module.css";
import {Form, FormLabel, Modal, Tab, Tabs} from "react-bootstrap";
import profileStyles from '../../css_modules/profile.module.css';
import avatar from "../../images/avatar.png";
import {FaCamera, FaPen, FaPencilAlt} from "react-icons/all";

const Profile = () => {

    const pathArray = window.location.href.split('/');
    const path = pathArray[pathArray.length - 1];
    const [key, setKey] = useState(path);

    const [email, setEmail] = useState('Ann Smith');

    return (
        <div className={`${profileStyles.shadow} profileTabs mt-5`}>
            <div className={`${styles.signUpTabs} border-bottom-0`}>
                <Tabs
                    activeKey={key}
                    onSelect={eventKey => setKey(eventKey)}
                    id="profile-tab" className='row' variant='pills'>

                    <Tab tabClassName={`col ml-3 ${styles.tab}`}
                         eventKey="profile" title="My profile">

                        <div className='row align-items-end'>
                            <div className='col-sm-8 col-12 text-right align-self-stretch'>
                                <div className={`d-flex align-items-center ml-3 mt-4`}>
                                    <div className={`${profileStyles.profilePhoto}`}>
                                        <img className={`${profileStyles.avatar}`} src={avatar}/>
                                        <span className={`${profileStyles.photoIconWrapper} d-flex align-items-center justify-content-center`}>
                                        <FaCamera color='#84B6A3' size='0.7em'/>
                                    </span>
                                    </div>

                                    <p className={`${profileStyles.name} ml-4`}>Ann Smith</p>
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
                                        <input id='phone' type='text' placeholder='Enter your phone'
                                               className={`ml-3 ${styles.inputs} ${profileStyles.inputs}`}/></div>
                                    <div>
                                        <FormLabel htmlFor='fblink'
                                                   className={`${styles.label}`}>FB link:</FormLabel>
                                        <input id='fblink' type='text'
                                               placeholder='Enter your FB link'
                                               className={`ml-3 ${styles.inputs} ${profileStyles.inputs}`}/></div>

                                </Form>

                            </div>
                        </div>
                    </Tab>
                    <Tab tabClassName={`col mr-3 ${styles.tab}`} eventKey="activities" title="Activities">
                        <div className='row'>

                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>

    );
};

export default Profile;