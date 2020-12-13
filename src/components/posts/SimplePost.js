import React, {Fragment} from 'react';
import styles from '../../css_modules/posts.module.css'
import profileStyles from '../../css_modules/profile.module.css';
import avatar from "../../images/avatar.png"
import postPhoto from "../../images/postphoto.png"
import {FaRegStar} from "react-icons/all";

let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32. The standard chunk of Lorem';


function cutText(text) {
    const size = 18;
    let temp = text.split(' ');
    if(temp.length>size) {
        text = temp.slice(0,size).join(' ');
        return <Fragment>{text}<span
            className={`${styles.more}`}> …more</span></Fragment>
    } else return text;

}

const SimplePost = (props) => {
    return (
        <div className={`${styles.postWrapper} mb-2 p-3`}>
            <div className={`container-sm`}>
                <div className='row'>
                    <div className='col-1 p-0'>
                        <img className={`${profileStyles.avatar}`} src={avatar} alt='profile'/>
                    </div>
                    <div className='col-9'>
                        <p className={`${styles.authorName}`}>John Goodboi</p>
                        <p className={`${styles.time}`}>2 h</p>
                        <img className={`${styles.postImage} my-2`} width='100%' src={postPhoto} alt='post'/>
                        <p className={`${styles.text}`}>
                            {cutText(text)}
                        </p>


                    </div>
                    <div className='col-1 offset-1 d-flex flex-column justify-content-between align-items-end'>
                        <p className={`${styles.moreIcon}`}>. . .</p>
                        <FaRegStar color='#BABABA'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimplePost;