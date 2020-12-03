import React from 'react';
import styles from "../css_modules/content.module.css";
import {Route, Switch} from "react-router-dom";
import {activitiesPage, profilePage} from "../utils/constants";
import ProfileComplex from "../reduxTools/containers/ProfileComplexContainer";
import ContentTitle from "./ContentTitle";
import ButtonOutlinedWhite from "./buttons/ButtonOutlinedWhite";
import ButtonSaveChanges from "./buttons/ButtonSaveChanges";

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
            </Switch>



        </div>
    );
};

export default Content;