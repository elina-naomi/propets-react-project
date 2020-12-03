import {REQUEST_EDIT} from "./editActions";

export const ERROR_AVATAR = 'ERROR_AVATAR';
export const SUCCESS_AVATAR = 'SUCCESS_AVATAR';
export const REQUEST_AVATAR = 'REQUEST_AVATAR';


export const requestUploadAvatarAction = () => (
    {
        type: REQUEST_AVATAR,
        payload: 'loading...'
    }
)

export const errorUploadAvatarAction = () => (
    {
        type: ERROR_AVATAR,
        payload: "Uploading error"
    }
)

export const successUploadAvatar = (result) => (
    {
        type: SUCCESS_AVATAR,
        newAvatar: result.data.link
    }
)




export const updateAvatarAction = (avatar) => {
    const formData = new FormData();
    formData.append('image', avatar);
    return (dispatch) => {
        dispatch(requestUploadAvatarAction());
        fetch('https://api.imgur.com/3/image', {
            // mode: 'cors',
            method: 'POST',
            headers: new Headers({
                // 'Content-Type': 'application/json',
                Authorization: 'Client-ID 6c621154e3dcbc7'
            }),
            body: formData
        }).then(response => {
            if (response.ok) {
                console.log(response);
                return response.json();
            }
        }).then(data=> {
            console.log(data);
            dispatch(successUploadAvatar(data));
        })
            .catch(error => {
                console.log(error.message);
                dispatch(errorUploadAvatarAction());

            });
    };

}