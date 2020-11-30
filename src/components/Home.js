import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {
    activitiesPage,
    favouritesPage, fosteringPage, foundPage,
    startPage,
    hotelsPage, lostPage,
    mainPage,
    profilePage,
    servicesPage, vethelpPage, walkingPage
} from "../utils/constants";
import Start from "./Start";
import Main from "./Main";
import SignUpModal from "../reduxTools/containers/SignUpContainer";

const Home = ({token}) => {

    const [modalShow, setModalShow] = useState(false);

    console.log(token);
    return (
        <div>
            <Switch>

                <Route exact path={['/', `/${startPage}`]}>
                    {token ? <Redirect to={`/${mainPage}`}/> : <Start signIn={() => {setModalShow(true)}}/> }
                </Route>

                <Route exact
                    path={[`/${mainPage}`, `/${profilePage}`,`/${activitiesPage}`, `/${favouritesPage}`, `/${servicesPage}/${hotelsPage}`, `/${servicesPage}/${walkingPage}`,
                        `/${servicesPage}/${fosteringPage}`, `/${servicesPage}/${vethelpPage}`]}>

                    {token? <Main colQuantity='col-7' bcFluid='greenBack'/> : <Redirect to={`/${startPage}`}/>}

                </Route>

                <Route exact path={[`/${lostPage}`, `/${foundPage}`]}>
                    {token ? <Main colQuantity='col-10' bcFluid='greenWhiteBack' isShow='display-none'/> : <Redirect to={`/${startPage}`}/>}
                </Route>

            </Switch>

            <SignUpModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>

    );
};

export default Home;