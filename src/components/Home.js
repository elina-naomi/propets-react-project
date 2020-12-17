import React, {useState} from 'react';
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import {
    activitiesPage,
    favouritesPage, fosteringPage, foundPage,
    startPage,
    hotelsPage, lostPage,
    mainPage,
    profilePage,
    servicesPage, vethelpPage, walkingPage, newMessagePostPage, newLostPostPage, newFoundPostPage
} from "../utils/constants";
import Start from "./Start";
import Main from "./Main";
import SignUpModal from "../reduxTools/containers/SignUpContainer";
import MainPageContent from "../reduxTools/containers/MainPageContentContainer";


const Home = ({token}) => {

    const [modalShow, setModalShow] = useState(false);

    let location = useLocation();
    console.log(location);
    console.log(token);
    return (
        <div>
            {/*Роутинг, ответственный за переброс или на стартовую страницу, или в залогиненную версию сайта (с 7 или 10 колонками)*/}

            <Switch>
                <Route exact path={['/', `/${startPage}`]}>
                    {token ? <Redirect to={`/${mainPage}`}/> : <Start signIn={() => {setModalShow(true)}}/> }
                </Route>



                <Route exact
                    path={[`/${mainPage}`, `/${mainPage}/:number`,`/${profilePage}`,`/${activitiesPage}`, `/${favouritesPage}`, `/${servicesPage}/${hotelsPage}`, `/${servicesPage}/${walkingPage}`,
                        `/${servicesPage}/${fosteringPage}`, `/${servicesPage}/${vethelpPage}`, `/${newMessagePostPage}`,`/${newLostPostPage}`, `/${newFoundPostPage}`]}>

                    {token? <Main colQuantity='col-7' bcFluid='greenBack' location={location}/> : <Redirect to={`/${startPage}`}/>}

                </Route>

                <Route exact path={[`/${lostPage}`, `/${foundPage}`]}>
                    {token ? <Main colQuantity='col-10' bcFluid='greenWhiteBack' location={location} isShow='display-none'/> : <Redirect to={`/${startPage}`}/>}
                </Route>

            </Switch>

            <SignUpModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>

    );
};

export default Home;