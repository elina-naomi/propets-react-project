export const startPage = 'home';
export const mainPage = 'main';
export const lostPage = 'lost';
export const foundPage = 'found';
export const favouritesPage = 'favourites';
export const profilePage = 'profile';
export const activitiesPage = 'activities';

export const servicesPage = 'services';
export const hotelsPage = 'hotels';
export const walkingPage = 'walking';
export const fosteringPage = 'fostering';
export const vethelpPage = 'vethelp';

export const newMessagePostPage = 'post';
export const newLostPostPage = 'new-lost';
export const newFoundPostPage = 'new-found';



export const baseUrl = 'https://app-propets-account.herokuapp.com/account/en/v1';
export const baseUrlMessaging = 'https://app-propets-messaging.herokuapp.com/message/en/v1'

export const createToken = (login, password) => {
    return 'Basic ' + btoa(`${login}:${password}`);
};