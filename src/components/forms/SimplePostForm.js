import React, {Fragment, useState} from 'react';
import styles from '../../css_modules/formsimple.module.css'
import profileStyles from "../../css_modules/profile.module.css";
import stylesMessage from "../../css_modules/statusmessage.module.css"
import {FaPlus, FaTimes, FiUpload} from "react-icons/all";
import ButtonOutlinedWhite from "../buttons/ButtonOutlinedWhite";
import ButtonPublish from "../buttons/ButtonPublish";
import {Spinner} from "react-bootstrap";


const iconPlusPositions = ['iconPlus1', 'iconPlus2', 'iconPlus3', 'iconPlus4', 'iconPlusNonDisplay'];


const SimplePostForm = (props) => {

    console.log(props);
    const [text, setText] = useState('');
    const [pictures, setPictures] = useState([]);
    const [uploadMessage, setUploadMessage] = useState('');
    const [iconPosition, setIconPosition] = useState(0);
    const [inDropZone, setInDropZone] = useState(false);
    let dragCounter = 0;

    console.log(pictures);

    function cutTitle(title) {
        const size = 12;
        let temp = title.split('');
        if (temp.length > size) {
            title = temp.slice(0, size).join('').concat('...');
        }
        return title;
    }

    function displayMessage(message) {

        // Если загрузка
        if (message === 'loading...') {
            return <Spinner animation="border" size="sm" className={stylesMessage.spinner}/>
        }
        // Если сообщение с ошибкой, или его нет
        else {
            return <span className={stylesMessage.statusMessage}>{message}</span>;
        }

    }

    function uploadPhotosHandler(imageFile) {
        // const imageFile = event.target.files[0];
        if (pictures.length < 4) {
            const formData = new FormData();
            formData.append('image', imageFile);
            setUploadMessage('loading...')
            fetch('https://api.imgur.com/3/image', {
                method: 'POST',
                // mode: 'cors', // no-cors, *cors, same-origin
                headers: new Headers({
                    Authorization: 'Client-ID 6c621154e3dcbc7'
                }),
                body: formData
            }).then(response => {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                }
            }).then(result => {
                const photo = result.data.link;
                console.log(photo);
                const newArray = [...pictures];
                newArray.push({
                    name: imageFile.name,
                    photo
                });
                setPictures(newArray);
                setUploadMessage('');
                setIconPosition(iconPosition + 1);
            })
                .catch(error => {
                    console.log(error.message);
                    setUploadMessage('Uploading error')
                });
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

    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setInDropZone(true);
        }
    };
    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(dragCounter);
        dragCounter--;
        console.log(dragCounter);
        if (dragCounter < 0) {
            setInDropZone(false);
        }
    };
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        setInDropZone(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            console.log(e.dataTransfer.files);
            const file = [...e.dataTransfer.files][0];
            e.dataTransfer.clearData();
            dragCounter = 0;
            uploadPhotosHandler(file);
        }
    };

    return (
        <div className='row mx-2'>
            <div
                className={inDropZone ? `${styles.formWrapperHideAllChild} container-sm ${styles.formWrapper} py-3 pr-4 ${styles.insideDragArea}`
                    : `container-sm ${styles.formWrapper} py-3 pr-4`}
                onDrop={e => handleDrop(e)}
                onDragOver={e => handleDragOver(e)}
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)}>
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
                                        uploadPhotosHandler(event.target.files[0]);

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
                                        uploadPhotosHandler(event.target.files[0]);
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
                        <ButtonPublish/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SimplePostForm;