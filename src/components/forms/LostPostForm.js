import React, {useState} from 'react';
import styles from "../../css_modules/formsimple.module.css";
import lostFoundPostStyles from "../../css_modules/lostfoundpost.module.css";
import dogPicture from "../../images/Dog-height.svg";
import {FaTimes, FiUpload} from "react-icons/all";
import ButtonOutlinedWhite from "../buttons/ButtonOutlinedWhite";
import profileStyles from "../../css_modules/profile.module.css";
import ButtonPublish from "../buttons/ButtonPublish";
import {displayMessage} from "../../utils/constants";

const LostPostForm = (props) => {
    const [uploadMessage, setUploadMessage] = useState('');



    return (
        <div className='row mx-2'>
            <div className={`container-sm ${styles.formWrapper} py-3 pr-4`}>

                <div className='row'>
                    <div className='col-6'>
                        <div className='row mb-1'>
                            <div className='col-4 text-right p-0'>
                                <label htmlFor='type' className={`${styles.labels} mb-0`}>Type:</label>
                            </div>
                            <div className='col-8'>
                                <select id='type' name='type'
                                    // placeholder='Dog'
                                        className={`${lostFoundPostStyles.selects}`}>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="bird">Bird</option>
                                </select>
                            </div>
                        </div>

                        <div className='row mb-1'>
                            <div className='col-4 text-right p-0'>
                                <label htmlFor='sex' className={`${styles.labels} mb-0`}>Sex:</label>
                            </div>
                            <div className='col-8'>
                                <select id='sex' name='sex'
                                        className={`${lostFoundPostStyles.selects}`}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>

                        <div className='row mb-1'>
                            <div className='col-4 text-right p-0'>
                                <label htmlFor='breed' className={`${styles.labels} mb-0`}>Breed:</label>
                            </div>
                            <div className='col-8'>
                                <input id='breed' name='breed' type='text' placeholder='Golden Retriever'
                                       className={`${lostFoundPostStyles.inputLine}`}>
                                </input>
                            </div>
                        </div>

                        <div className='row mb-1'>
                            <div className='col-4 text-right p-0'>
                                <label htmlFor='color' className={`${styles.labels} mb-0`}>Color:</label>
                            </div>
                            <div className='col-8'>
                                <input id='color' name='color' type='text' placeholder='Beige'
                                       className={`${lostFoundPostStyles.inputLine}`}>
                                </input>
                            </div>
                        </div>

                        <div className='row mb-1'>
                            <div className='col-4 text-right p-0'>
                                <label htmlFor='height' className={`${styles.labels} mb-0`}>Height:</label>
                            </div>
                            <div className='col-8'>
                                <select id='height' name='height'
                                        className={`${lostFoundPostStyles.selects}`}>
                                    <option value="male">45-70 cm</option>
                                    <option value="female">70-90 cm</option>
                                </select>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-4 text-right p-0'>
                                <label htmlFor='description' className={`${styles.labels} mb-0`}>Description:</label>
                                <p className={`${styles.prompts}`}>up to 150 char</p>

                            </div>
                            <div className='col-8'>
                        <textarea id='description' name='description' placeholder='brown fox jumps over a lazy dog'
                                  className={`${lostFoundPostStyles.inputs} ${lostFoundPostStyles.inputDescr} p-1 mt-1`}>
                        </textarea>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-4 text-right p-0'>
                                <label htmlFor='description' className={`${styles.labels} mb-0`}>Tags:</label>
                                <p className={`${styles.prompts}`}>up to 100 char</p>

                            </div>
                            <div className='col-8'>
                        <textarea id='tags' name='tags' placeholder='blue collar with stars, no left ear, damaged tail.'
                                  className={`${lostFoundPostStyles.inputs} p-1 mt-1`}>
                        </textarea>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-4 text-right p-0'>
                                <label htmlFor='description' className={`${styles.labels} mb-0`}>Location:</label>

                            </div>
                            <div className='col-8'>
                        <textarea id='location' name='location' placeholder='Florentin Street, Tel Aviv'
                                  className={`${lostFoundPostStyles.inputs} p-1 mt-1`}>
                        </textarea>
                            </div>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div className='row align-items-center'>
                            <img src={dogPicture} alt='height at withers' className='col-auto mt-2 offset-1'/>
                        </div>

                        <div className={`${lostFoundPostStyles.divider} row my-4 ml-2`}/>

                        <div className='row'>
                            <div
                                className={`col-5 offset-1 d-flex flex-column align-items-center text-center justify-content-between`}>


                                <FiUpload color='#84B6A3' size='2em'/>
                                <p className={`${styles.dragdropdescrp}`}>Drag and drop photos or</p>

                                <label className='mb-1' htmlFor="photoUploader">
                                    <input
                                        type="file" name="photoUploader" id="photoUploader" className='d-none'/>
                                    <span className='pb-3'>
                                <ButtonOutlinedWhite text='Browse'/>
                            </span>

                                </label>
                            </div>

                            <div className='col-6'>
                                <div className={`${styles.photoListWrapper} ${lostFoundPostStyles.photoWrapper} container`}>
                                        <div className={`${styles.photoItem} row align-items-center justify-content-between px-1`}>
                                            <span>img1.jpg</span>
                                            <span>
                                        <FaTimes color='#BABABA' size='0.8em'/>
                                    </span>
                                        </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

                {/*Контакты*/}
                <div className={`${lostFoundPostStyles.divider} row my-4 mx-1`}/>

                <div className='row'>
                    <div className='col-2 text-right p-0'>
                        <label htmlFor='phone' className={`${styles.labels} mb-0`}>Contacts:</label>
                    </div>
                    <div className='col-10'>
                        <div className='row'>
                            <input id='phone' name='phone' type='text' placeholder='Phone*'
                                   className={`${lostFoundPostStyles.inputLine} col mx-3 px-2`}>
                            </input>
                            <input id='email' name='email' type='text' placeholder='Email'
                                   className={`${lostFoundPostStyles.inputLine} col mx-3 px-2`}>
                            </input>
                            <input id='fb' name='fb' type='text' placeholder='Facebook profile'
                                   className={`${lostFoundPostStyles.inputLine} col mx-3 px-2`}>
                            </input>
                        </div>


                    </div>
                </div>
                <div className='row justify-content-between mt-3'>
                    <div className='col-auto d-flex align-items-center'>
                        <img className={`${profileStyles.avatar} float-left mr-3`} src={props.avatar} alt='profile'/>

                        <div>
                            <p className={`${styles.authorName}`}>{props.userName}</p>
                        </div>
                    </div>

                    <div className='col-auto d-flex align-items-center'>
                        {displayMessage(uploadMessage)}
                    </div>

                    <div className='col-auto d-flex align-items-center'>
                        <span>
                            <ButtonPublish/>
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default LostPostForm;