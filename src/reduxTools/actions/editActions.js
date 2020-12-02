// import {baseUrl} from "../../utils/constants";
//
// export const REQUEST_EDIT = 'REQUEST_EDIT'
// export const ERROR_EDIT = 'ERROR_EDIT';
// export const SUCCESS_EDIT = 'SUCCESS_EDIT';
//
// export const requestEditAction = () => (
//     {
//         type: REQUEST_EDIT,
//         payload: 'loading...'
//     }
// )
//
// export const errorEditAction = (message) => (
//     {
//         type: ERROR_EDIT,
//         payload: message
//     }
// )
//
// export const successEditAction = (user) => (
//     {
//         type: SUCCESS_EDIT,
//         user
//     }
// )
//
// export const editUserAction = (updatedUser, token, login) => {
//     return (dispatch) => {
//         dispatch(requestEditAction());
//         fetch(`${baseUrl}/user/${login}`, {
//             method: 'PUT',
//             body: JSON.stringify(updatedUser),
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': token
//             }
//         })
//             .then(response => {
//                 if (response.ok) {
//                     return response.json()
//                 } else {
//                     if(response.status===409) {
//                         throw new Error('User with the same name already exists.');
//                     }
//                 }
//             })
//             .then(profile => {
//                 dispatch(successEditAction(profile));
//             })
//             .catch(e => {
//                 dispatch(errorEditAction(e.message));
//             });
//     }
// }