import React from 'react';
import styles from '../../css_modules/posts.module.css';
import lostFoundStyles from '../../css_modules/lostfound.module.css';
import postPhoto from "../../images/postphoto.png";
import {FaEnvelopeSquare, FaFacebook, FaFacebookSquare, FaMapMarker, FaPhoneSquare} from "react-icons/all";
import profileStyles from "../../css_modules/profile.module.css";
import avatar from "../../images/avatar.png";


const LostPost = (props) => {
    return (
        <div className={`${styles.postWrapper} my-4 p-2 ${props.marginTop}`}>
            <div className='container-sm'>
                <div className='row'>
                    <div className='col-5 pl-2'>
                        <img className={`${lostFoundStyles.postImage} my-2`} width='100%' src={postPhoto} alt='post'/>
                    </div>
                    <div className='col-7'>
                        <p className={`${lostFoundStyles.title} my-2`}>Dog, Golden Retriever</p>
                        <div className='row my-3'>
                            <div className='col-5'>
                                <p className={`${lostFoundStyles.descriptionItem}`}><span>Color: </span>golden</p>
                                <p className={`${lostFoundStyles.descriptionItem}`}><span>Sex: </span>male</p>
                                <p className={`${lostFoundStyles.descriptionItem}`}><span>Height: </span>45cm</p>
                            </div>
                            <div className='col-7'>
                                <p className={`${lostFoundStyles.descriptionItem}`}><span>Distinctive features: </span>blue
                                    collar with stars, no left ear, damaged tail.</p>
                            </div>
                        </div>
                        <p className={`${lostFoundStyles.descriptionItem} ${lostFoundStyles.last} pb-3`}><span>Description: </span>
                            brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by
                            fox whelps. Bawds jog, flick quartz, vex nymphs.</p>

                        <FaMapMarker color='#84B6A3' className='mr-2' size='0.75em'/>
                        <span className={`${lostFoundStyles.descriptionItem} my-2`}>Florentin, 27, Tel Aviv</span>
                        <div className='my-2 d-flex align-items-center justify-content-between'>
                            <div className='d-flex'>
                                <img className={`${profileStyles.avatar} float-left mr-2`} src={avatar} alt='profile'/>

                                <div>
                                    <p className={`${styles.authorName}`}>John Goodboi</p>
                                    <p className={`${styles.time}`}>Dec 12, 2019</p>
                                </div>
                            </div>

                            <div>
                                <FaPhoneSquare color='BABABA' size='1em' className='ml-2'/>
                                <FaFacebookSquare color='BABABA' size='1em' className='ml-2'/>
                                <FaEnvelopeSquare color='BABABA' size='1em' className='ml-2'/>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default LostPost;