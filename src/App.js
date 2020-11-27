import './App.css';
import React, {useState} from 'react';
import Start from "./components/Start";
import SignUpModal from "./components/SignUpModal";
import {Route, Switch} from "react-router-dom";
import {
    activitiesPage,
    favouritesPage,
    fosteringPage,
    foundPage,
    homePage,
    hotelsPage,
    lostPage,
    mainPage, profilePage,
    servicesPage, vethelpPage,
    walkingPage
} from "./utils/Constants";
import Main from "./components/Main";

const App = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <Switch>
                <Route path={['/', `/${homePage}`]} exact><Start signIn={() => {
                    setModalShow(true)
                }}/></Route>
                <Route
                    path={[`/${mainPage}`, `/${profilePage}`,`/${activitiesPage}`, `/${favouritesPage}`, `/${servicesPage}/${hotelsPage}`, `/${servicesPage}/${walkingPage}`,
                        `/${servicesPage}/${fosteringPage}`, `/${servicesPage}/${vethelpPage}`]}
                    exact><Main colQuantity='col-7'
                                bcFluid='greenBack'/></Route>
                <Route path={[`/${lostPage}`, `/${foundPage}`]} exact><Main colQuantity='col-10'
                                                                            bcFluid='greenWhiteBack'
                                                                            isShow='display-none'/></Route>

            </Switch>

            <SignUpModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>

    );
};

export default App;