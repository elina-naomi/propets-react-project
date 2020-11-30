import React, {useEffect, useState} from 'react';
import {Spinner, Col, Container, Form, FormLabel, Modal, Row, Tab, Tabs} from "react-bootstrap";
import styles from '../css_modules/tabs.module.css';
import logo from '../images/Group 1-green.svg'
import {FaPaw} from "react-icons/all";
import {createToken} from "../utils/constants";

const SignUpModal = (props) => {
    console.log(props);
    const [key, setKey] = useState('signIn');

    // hooks for login
    const [enterLogin, setEnterLogin] = useState('');
    const [password, setPassword] = useState('');

    //hooks for registration
    const [name, setName] = useState('');





    //сбросить значения в форме
    function handleClickReset() {
        setEnterLogin('');
        setPassword('');
    }

    //при появлении токена - сбросить значения формы и скрыть модальное окно
    useEffect(() => {
        handleClickReset();
        props.onHide();
    }, [props.token]);


    function handleClick() {
        if (key === 'signIn') {
            const token = createToken(enterLogin, password);
            props.login(token);
        }
        else {
            // обработчник для register
        }
    }

    //отображать или спиннер, или мессадж об ошибке
    function displayMessage() {
        if (props.message === 'loading...') {
            return <Spinner animation="border" size="sm" className={styles.spinner}/>
        } else {
            return <p className={styles.statusMessage}>{props.message}</p>;
        }
    }

    return (
        <Modal
            {...props}

            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName={`${styles.width} signUpWindowModal`}
            contentClassName={`${styles.window}`}
            // Здесь прописать эффект размытия заднего фона
            backdropClassName={`${styles.backDropBlur}`}>
            <Modal.Header closeButton className='py-3 pl-0 border-bottom-0'>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <Modal.Title>
                                <img src={logo} alt="ProPets logo"/>
                            </Modal.Title>

                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <p className={`col mb-0 ${styles.subtitle}`}><span className='font-weight-bold'>Welcome! </span>
                            Please sign in / sign up to continue</p>
                    </Row>
                </Container>
            </Modal.Header>

            <Modal.Body className='py-0'>
                <div className={`${styles.signUpTabs}`}>
                    <Tabs
                        onSelect={eventKey => setKey(eventKey)}
                        activeKey={key}
                        // defaultActiveKey="signUp"
                        id="invitationForm"
                        className='row' variant='pills'>

                        <Tab tabClassName={`col ml-3 ${styles.tab}`} eventKey="signUp" title="Sign Up">
                            <div className='row align-items-end'>
                                <div className='col-sm-6 col-12 text-right align-self-stretch'>
                                    <Form className='w-100 mt-4 pr-2'>
                                        <div>
                                            <FormLabel htmlFor='registerName'
                                                       className={`${styles.label}`}>Name:</FormLabel>
                                            <input id='registerName' value={name} type='text'
                                                   placeholder='Enter your name'
                                                   className={`ml-3 ${styles.inputs}`} onChange={event => {
                                                setName(event.target.value);
                                                console.log(name);
                                            }}/>
                                        </div>
                                        <div>
                                            <FormLabel htmlFor='registerEmail'
                                                       className={`${styles.label}`}>Email:</FormLabel>
                                            <input id='registerEmail'
                                                   type='text' placeholder='Enter your email'
                                                   className={`ml-3 ${styles.inputs}`}/></div>
                                        <div>
                                            <FormLabel htmlFor='registerPassword'
                                                       className={`${styles.label}`}>Password:</FormLabel>
                                            <input id='registerPassword' type='password'
                                                   placeholder='Enter your password'
                                                   className={`ml-3 ${styles.inputs}`}/></div>
                                        <div>
                                            <FormLabel htmlFor='repeatRegisterPassword' className={`${styles.label}`}>Password:
                                            </FormLabel>
                                            <input id='repeatRegisterPassword' type='password'
                                                   placeholder='Repeat password'
                                                   className={`ml-3 ${styles.inputs}`}/></div>
                                    </Form>

                                </div>

                                <div className='col-sm-6 col-12 mb-sm-1 my-3'>
                                    <p className={`${styles.subscription}`}>Password must have at least 8 characters
                                        with at least one Capital letter, at least one lower case letter and at
                                        least
                                        one number or special character.</p>
                                    <p className={`${styles.subscription}`}>Please re-enter your password</p>
                                </div>
                            </div>
                        </Tab>

                        <Tab tabClassName={`col mr-3 ${styles.tab}`} eventKey="signIn" title="Sign In">
                            <div className='row align-items-center'>
                                <div className='col-sm-6 col-12 '>
                                    <div className='w-100 my-5 pr-2 pt-2 text-right'>

                                        <div><FormLabel htmlFor='loginEmail'
                                                        className={`${styles.label}`}>Email:</FormLabel>
                                            <input id='loginEmail'
                                                   value={enterLogin}
                                                   onChange={event => setEnterLogin(event.target.value)}
                                                   type='text' placeholder='Enter your email'
                                                   className={`ml-3 ${styles.inputs}`}/></div>
                                        <div><FormLabel htmlFor='loginPassword'
                                                        className={`${styles.label}`}>Password:</FormLabel>
                                            <input id='loginPassword'
                                                   value={password}
                                                   onChange={event => setPassword(event.target.value)}
                                                   type='password' placeholder='Enter your password'
                                                   className={`ml-3 ${styles.inputs}`}/></div>
                                    </div>
                                    <a href='#' className={`${styles.subscription} ml-sm-5 pl-sm-5`}>Forgot
                                        password?</a>
                                </div>
                                <div className={`col-sm-6 col-12 ${styles.statusMessageWrapper}`}>
                                    {displayMessage()}
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Modal.Body>

            <Modal.Footer className='p-0 border-top-0'>
                <div className='row align-items-center justify-content-center flex-wrap-reverse flex-sm-wrap'>
                    <div className='col-sm-6 col-12'>
                        <p className={`${styles.subscription}  mt-3`}>By clicking “Submit”, you agree to us processing
                            your information in accordance with <a className={`${styles.accepting}`} href='#'>these
                                terms.</a></p>
                    </div>
                    <div className='col-sm-6 col-12 text-sm-right d-flex flex-wrap-reverse flex-sm-wrap'>
                        <button className={`${styles.formButton} ${styles.cancelButton} mr-sm-3`}
                                onClick={props.onHide}>Cancel
                        </button>
                        <button className={`${styles.formButton} ${styles.submitButton}`}
                                onClick={handleClick}>
                            <FaPaw color='white' className={`mr-3 ${styles.pawIcon}`}/>Submit
                        </button>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default SignUpModal;