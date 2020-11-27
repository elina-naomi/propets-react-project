import React from 'react';
import styles from '../../css_modules/tabs.module.css';
import logo from '../../images/Group 1-green.svg'
import {Tab, Tabs} from "react-bootstrap";
import {FaPaw, FaTimes} from "react-icons/all";


const SignUp = () => {
    return (
        <div className='container-sm mt-5'>

            <div className='signUpWindowModal row justify-content-center'>
                <div className={`col-7 ${styles.window} p-3`}>
                    <div className='row justify-content-between'>
                        <div className='col-4'>
                            <img className='w-100 pr-3' src={logo} alt="ProPets logo"/>
                        </div>
                        <div className='col-1'>
                            <FaTimes className='float-right' color='#BABABA'/>
                        </div>
                    </div>

                    <div className='row my-2'>
                        <p className={`col ${styles.subtitle}`}><span className='font-weight-bold'>Welcome! </span>
                            Please sign in / sign up to continue</p>
                    </div>

                    <div className={`${styles.signUpTabs}`}>
                        <Tabs defaultActiveKey="signUp" id="uncontrolled-tab-example" className='row' variant='pills'>

                            <Tab tabClassName={`col ml-3 ${styles.tab}`} eventKey="signUp" title="Sign Up">
                                <div className='row align-items-end'>
                                    <div className='col text-right'>
                                        <form className='w-100 mt-4 pr-2'>
                                            <label className={`${styles.label}`}>Name:
                                                <input type='text' placeholder='Enter your name'
                                                       className={`ml-3 ${styles.inputs}`}/></label>
                                            <label className={`${styles.label}`}>Email:
                                                <input type='text' placeholder='Enter your email'
                                                       className={`ml-3 ${styles.inputs}`}/></label>
                                            <label className={`${styles.label}`}>Password:
                                                <input type='password' placeholder='Enter your password'
                                                       className={`ml-3 ${styles.inputs}`}/></label>
                                            <label className={`${styles.label}`}>Password:
                                                <input type='password' placeholder='Repeat password'
                                                       className={`ml-3 ${styles.inputs}`}/></label>
                                        </form>

                                    </div>
                                    <div className='col mb-1'>
                                        <p className={`${styles.subscription}`}>Password must have at least 8 characters
                                            with at least one Capital letter, at least one lower case letter and at
                                            least
                                            one number or special character.</p>
                                        <p className={`${styles.subscription}`}>Please re-enter your password</p>
                                    </div>
                                </div>
                            </Tab>
                            <Tab tabClassName={`col mr-3 ${styles.tab}`} eventKey="signIn" title="Sign In">
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='w-100 my-5 pr-2 pt-2 text-right'>

                                            <label className={`${styles.label}`}>Email:
                                                <input type='text' placeholder='Enter your email'
                                                       className={`ml-3 ${styles.inputs}`}/></label>
                                            <label className={`${styles.label}`}>Password:
                                                <input type='password' placeholder='Enter your password'
                                                       className={`ml-3 ${styles.inputs}`}/></label>
                                        </div>
                                        <a href='#' className={`${styles.subscription} ml-5 pl-5`}>Forgot password?</a>
                                        <a className='text-center'></a>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-6'>
                            <p className={`${styles.subscription}  mt-3`}>By clicking “Submit”, you agree to us processing
                                your information in accordance with <a className={`${styles.accepting}`} href='#'>these terms.</a></p>
                        </div>
                        <div className='col-6 text-right'>
                            <a className={`${styles.formButton} ${styles.cancelButton} mr-3`} href="#">Cancel</a>
                            <a className={`${styles.formButton} ${styles.submitButton}`} href="#">
                                <FaPaw color='white' className={`mr-3 ${styles.pawIcon} w-auto`}/>Submit</a>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default SignUp;