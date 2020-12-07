import React from 'react';
import styles from "../css_modules/content.module.css";
import {Route, Switch} from "react-router-dom";
import {activitiesPage, lostPage, mainPage, profilePage} from "../utils/constants";
import ProfileComplex from "../reduxTools/containers/ProfileComplexContainer";
import ContentTitle from "./ContentTitle";
import SimplePost from "./posts/SimplePost"
import LostPageContent from "./contents/LostPageContent";

const Content = (props) => {

    return (
        <div className={`${props.colQuantity} bg-white ${styles.mainContent} `}>

            {/*Отображение ContentTitle*/}
            <Route
                path={[`/${profilePage}`, `/${activitiesPage}`]}
                exact component={ContentTitle}/>


            <Switch>
                <Route
                    path={[`/${profilePage}`, `/${activitiesPage}`]}
                    exact component={ProfileComplex}>
                </Route>
                <Route
                    path={[`/${mainPage}`]}
                    exact><SimplePost marginTop='mt-3'/>
                </Route>
                <Route
                    path={[`/${lostPage}`]}
                    exact><LostPageContent marginTop='mt-4'/>
                </Route>
            </Switch>



        </div>
    );
};

export default Content;