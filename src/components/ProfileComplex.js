import React, {Fragment, useEffect, useState} from 'react';
import styles from "../css_modules/tabs.module.css";
import stylesMessage from "../css_modules/statusmessage.module.css"
import {Form, FormLabel, Nav, Spinner, Tab} from "react-bootstrap";
import profileStyles from '../css_modules/profile.module.css';
import {FaCamera, FaCheck, FaPencilAlt} from "react-icons/all";
import {Link, Route} from "react-router-dom";
import {activitiesPage, profilePage} from "../utils/constants";
import ButtonOutlinedWhite from "./buttons/ButtonOutlinedWhite";
import ButtonSaveChanges from "./buttons/ButtonSaveChanges";


const ProfileComplex = (props) => {
    const pathArray = window.location.href.split('/');
    const path = pathArray[pathArray.length - 1];
    const [key, setKey] = useState(path);

    const [name, setName] = useState(props.userName);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);
    const [fbLink, setFbLink] = useState(props.fblink);
    const [avatar, setAvatar] = useState(props.avatar);

    const user = JSON.parse(localStorage.getItem('user'));

    const [isNameEdit, setIsNameEdit] = useState(false);

    //при появлении токена - сбросить значения формы и скрыть модальное окно
    useEffect(() => {
        if(props.newAvatar) {
            setAvatar(props.newAvatar);
        }
    },[props.newAvatar]);

    function resetChanges() {
        setName(user.userName || '');
        setEmail(user.userLogin || '');
        setPhone(user.phone || '');
        setFbLink(user.fblink || '');
        setAvatar(user.avatar || '');
    }

    function submitChanges() {
        const updatedUser = {
            avatar: avatar,
            phone: phone,
            // userLogin: email,
            userName: name
            // fblink: fbLink
        }
        props.editUser(updatedUser, props.token, user.userLogin);
    }


    // const [isVisible, setIsVisible] = useState('');
    //отображать или спиннер, или мессадж об ошибке
    function displayMessage() {

        // Если загрузка
        if (props.message === 'loading...') {
            return <Spinner animation="border" size="sm" className={stylesMessage.spinner}/>
        }
        //Если message null, т.е. прошло успешно
        if (props.message === 'saved') {
            return <span>
                <FaCheck size='0.7em' className={`${stylesMessage.spinner} mr-1`}/>
                <span className={`${stylesMessage.statusMessage} ${stylesMessage.success}`}>saved</span>
            </span>
        }
        // Если сообщение с ошибкой, или его нет
        else {
            return <span className={stylesMessage.statusMessage}>{props.message}</span>;
        }

    }

    function displayName() {
        if(isNameEdit) {
            return <Fragment>
                <input id='name' value={name} type='text'
                       className={`ml-4 pl-0 ${styles.inputs} ${profileStyles.inputs} ${styles.inputName}`}
                       onChange={event => {
                           setName(event.target.value);
                       }}/>
                <FaPencilAlt
                    onClick={()=>setIsNameEdit(false)}
                    color='#BABABA' size='0.7em' className='ml-2'/>
            </Fragment>

        }else {
            return <Fragment>
                <p className={`${profileStyles.name} ml-4`}>{name}</p>
                <FaPencilAlt
                    onClick={()=>setIsNameEdit(true)}
                    color='#BABABA' size='0.7em' className='ml-2'/>
            </Fragment>
        }
    }


    return (
        <Fragment>
            <div className={`${profileStyles.shadow} profileTabs`}>
                <div className={`${styles.signUpTabs} border-bottom-0`}>
                    <Tab.Container onSelect={eventKey => {
                        setKey(eventKey);
                        resetChanges();
                    }
                    }
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
                                                <img className={`${profileStyles.avatar}`} src={avatar} alt='profile'/>
                                                <label htmlFor="imageUploader">
                                                    <input
                                                        onChange={event => {
                                                            const imageFile = event.target.files[0];
                                                            console.log(imageFile);
                                                            props.updateAvatar(imageFile);

                                                        }}
                                                        type="file" name="imageUploader" id="imageUploader" className='d-none'/>
                                                    <span className={`${profileStyles.photoIconWrapper} 
                                                    d-flex align-items-center justify-content-center`}>
                                                        <FaCamera color='#84B6A3' size='0.7em'/>
                                                    </span>
                                                </label>
                                            </div>
                                            {displayName()}
                                        </div>
                                        <Form className='w-100 mt-4 pr-2 mb-5'>
                                            <div>
                                                <FormLabel htmlFor='email'
                                                           className={`${styles.label}`}>Email:</FormLabel>
                                                <input id='email' value={email} type='text'
                                                       placeholder='Enter your email'
                                                       className={`ml-3 ${styles.inputs} ${profileStyles.inputs}`}
                                                       onChange={event => {
                                                           setEmail(event.target.value);
                                                       }}/>
                                            </div>
                                            <div>
                                                <FormLabel htmlFor='phone'
                                                           className={`${styles.label}`}>Phone:</FormLabel>
                                                <input id='phone' value={phone} type='text'
                                                       placeholder='Enter your phone'
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


            {/*Отображение кнопок Save и Cancel*/}
            <Route path={`/${profilePage}`} exact>{
                <div className='mt-4 mr-2 pb-2 float-right'>
                    <span className='mr-3'>
                        {displayMessage()}
                    </span>

                    <span onClick={() => {
                        resetChanges();
                    }}>
                        <ButtonOutlinedWhite marginRight='mr-3'/>
                    </span>

                    <span onClick={submitChanges}>
                    <ButtonSaveChanges/>
                    </span>
                </div>
            }</Route>
        </Fragment>

    );
};

export default ProfileComplex;

