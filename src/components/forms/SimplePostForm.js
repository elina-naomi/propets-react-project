import React, {Fragment, useState} from 'react';
import styles from '../../css_modules/formsimple.module.css'
import profileStyles from "../../css_modules/profile.module.css";
import stylesMessage from "../../css_modules/statusmessage.module.css"
import {FaPlus, FaTimes, FiUpload} from "react-icons/all";
import ButtonOutlinedWhite from "../buttons/ButtonOutlinedWhite";
import ButtonPublish from "../buttons/ButtonPublish";
import {Spinner} from "react-bootstrap";
import DragAndDrop from "../DragAndDrop";
import {baseUrl, baseUrl2, baseUrlMessaging, displayMessage, mainPage, startPage} from "../../utils/constants";
import {Redirect, Route} from "react-router-dom";
import Start from "../Start";


const iconPlusPositions = ['iconPlus1', 'iconPlus2', 'iconPlus3', 'iconPlus4', 'iconPlusNonDisplay'];


const SimplePostForm = (props) => {

    const [text, setText] = useState('');
    const [pictures, setPictures] = useState([]);
    const [uploadMessage, setUploadMessage] = useState('');
    const [iconPosition, setIconPosition] = useState(0);

    function publishPost() {
        if (text) {
            const newPost = {
                userName: props.userName,
                avatar: props.avatar,
                text,
                images: pictures.map(p => p.photo)
            }
            createSimplePost(props.token, props.email, newPost);

        }
    }

    function createSimplePost(token, login, newPost) {
        console.log(newPost);
        setUploadMessage('loading...');
        fetch(`${baseUrlMessaging}/post/${login}`, {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json',
                'X-Token': token
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log('ok');
                    return response.json()
                } else {
                    throw new Error('Failed to post message');
                }
            })
            .then(post => {
                console.log(post);
                setText('');
                setPictures([]);
                setIconPosition(0);
                setUploadMessage('done');
            })
            .catch(e => {
                setUploadMessage(e.message)
            });
    }


    function cutTitle(title) {
        const size = 12;
        let temp = title.split('');
        if (temp.length > size) {
            title = temp.slice(0, size).join('').concat('...');
        }
        return title;
    }

    // function displayMessage(message) {
    //
    //     // Если загрузка
    //     if (message === 'loading...') {
    //         return <Spinner animation="border" size="sm" className={stylesMessage.spinner}/>
    //     }
    //     // Если сообщение с ошибкой, или его нет
    //     else {
    //         return <span className={stylesMessage.statusMessage}>{message}</span>;
    //     }
    //
    // }

    async function uploadPhotosHandler(photos) {
        // Если кол-во загружаемых фото меньше или равно кол-ву оставшегося места для фото
        if (photos.length <= (4 - pictures.length)) {
            const newArray = [...pictures];
            try {
                for (let i = 0; i < photos.length; i++) {
                    const formData = new FormData();
                    formData.append('image', photos[i]);
                    setUploadMessage('loading...');
                    const response = await fetch('https://api.imgur.com/3/image', {
                        method: 'POST',
                        // mode: 'cors', // no-cors, *cors, same-origin
                        headers: new Headers({
                            Authorization: 'Client-ID 6c621154e3dcbc7'
                        }),
                        body: formData
                    });
                    const result = await response.json();
                    const photo = result.data.link;
                    console.log(photo);

                    newArray.push({
                        name: photos[i].name,
                        photo
                    });

                }
                setPictures(newArray);
                setIconPosition(iconPosition + photos.length);
                setUploadMessage('');
            } catch (error) {
                console.log(error.message);
                setUploadMessage('Uploading error')
            }
        } else {
            setUploadMessage('up to 4 photos only')
        }

    }

    function displayPhotoGallery() {
        switch (pictures.length) {
            case 0:
                return <div className='col-12'/>
            case 1:
                return <div className='col-9 p-0'>
                    <img className={`${styles.imageBig}`} width='100%' src={pictures[0].photo} alt='post'/>
                </div>

            case 2:
                return <Fragment>
                    <div className='col-9 p-0'>
                        <img className={`${styles.imageBig}`} width='100%' src={pictures[0].photo} alt='post'/>
                    </div>
                    <div className='col-3 p-0'>
                        <img className={`${styles.imageSmall}`} width='100%' src={pictures[1].photo} alt='post'/>
                    </div>
                </Fragment>
            case 3:
                return <Fragment>
                    <div className='col-9 p-0'>
                        <img className={`${styles.imageBig}`} width='100%' src={pictures[0].photo} alt='post'/>
                    </div>
                    <div className='col-3 p-0'>
                        <img className={`${styles.imageSmall}`} width='100%' src={pictures[1].photo} alt='post'/>
                        <img className={`${styles.imageSmall}`} width='100%' src={pictures[2].photo} alt='post'/>
                    </div>
                </Fragment>
            default:
                return <Fragment>
                    <div className='col-9 p-0'>
                        <img className={`${styles.imageBig}`} width='100%' src={pictures[0].photo} alt='post'/>
                    </div>
                    <div className='col-3 p-0'>
                        <img className={`${styles.imageSmall}`} width='100%' src={pictures[1].photo} alt='post'/>
                        <img className={`${styles.imageSmall}`} width='100%' src={pictures[2].photo} alt='post'/>
                        <img className={`${styles.imageSmall}`} width='100%' src={pictures[3].photo} alt='post'/>
                    </div>
                </Fragment>
        }

    }

    if(uploadMessage==='done') {
        return (
            <Redirect to={`/${mainPage}`}/>
        )
    }
    else
        return (
        <Fragment>
            <div className='row mx-2'>

                <DragAndDrop uploadPhotosHandler={uploadPhotosHandler}
                             isInDropZoneStyle={`${styles.formWrapperHideAllChild} container-sm ${styles.formWrapper} py-3 pr-4 ${styles.insideDragArea}`}
                             notInDropZoneStyle={`container-sm ${styles.formWrapper} py-3 pr-4`}>
                    <div className='row mb-3'>
                        <div className='col-2 text-right p-0'>
                            <label htmlFor='text' className={`${styles.labels} mb-0`}>Text:</label>
                            <p className={`${styles.prompts}`}>up to 1500 char</p>
                        </div>
                        <div className='col-10'>
                        <textarea id='text' value={text}
                                  placeholder='Enter your text'
                                  className={`${styles.inputs} ${styles.inputText} p-2`}
                                  onChange={event => {
                                      setText(event.target.value)
                                  }}


                        />
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-2 text-right p-0'>
                            <label htmlFor='photos' className={`${styles.labels} mb-0`}>Photos:</label>
                            <p className={`${styles.prompts}`}>up to 4 images</p>
                        </div>
                        <div className='col-4'>
                            <div className={`container-fluid ${styles.photoWrapper}`}>

                                <label htmlFor="photoUploader"
                                       className={`${styles.iconPlus} ${styles[iconPlusPositions[iconPosition]]} mb-0`}>
                                    <input
                                        onChange={event => {
                                            return uploadPhotosHandler(event.target.files);

                                        }}
                                        type="file" name="photoUploader" id="photoUploader" className='d-none'/>
                                    <FaPlus color='white' size='1em'
                                    />

                                </label>


                                <div className='row'>
                                    {displayPhotoGallery()}
                                </div>
                            </div>
                        </div>
                        <div
                            className={`col-3 d-flex flex-wrap flex-column align-items-center text-center justify-content-between`}>


                            <FiUpload color='#84B6A3' size='2em'/>
                            <p className={`${styles.dragdropdescrp}`}>Drag and drop photos or</p>

                            <label className='mb-0' htmlFor="photoUploader">
                                <input
                                    onChange={event => {
                                        if (pictures.length < 4) {
                                            return uploadPhotosHandler(event.target.files);
                                        } else {
                                            console.log('up to 4 photos only');
                                            setUploadMessage('up to 4 photos only')
                                        }
                                    }}
                                    type="file" name="photoUploader" id="photoUploader" className='d-none'/>
                                <span className='pb-3'>
                                <ButtonOutlinedWhite text='Browse'/>
                            </span>

                            </label>
                        </div>
                        <div className='col-3'>
                            <div className={`${styles.photoListWrapper} container`}>
                                {pictures.map((item, index) =>
                                    <div key={index}
                                         className={`${styles.photoItem} row align-items-center justify-content-between px-1`}>
                                        <span>{cutTitle(item.name)}</span>
                                        <span onClick={() => {
                                            const newPicturesArray = [...pictures];
                                            newPicturesArray.splice(index, 1);
                                            setPictures(newPicturesArray);
                                            setIconPosition(iconPosition - 1);
                                        }}>
                                        <FaTimes color='#BABABA' size='0.8em'/>
                                    </span>
                                    </div>)}
                            </div>

                        </div>
                    </div>
                    <div className='row justify-content-between'>
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
                        <span
                            onClick={publishPost}
                        >
                            <ButtonPublish/>
                        </span>
                        </div>

                    </div>
                </DragAndDrop>

            </div>
        </Fragment>

    );
};

export default SimplePostForm;