import React, {Fragment} from 'react';
import styles from "../css_modules/content.module.css";
import {Route, Switch} from "react-router-dom";
import {activitiesPage, foundPage, lostPage, profilePage} from "../utils/Constants";
import ProfileComplex from "./ProfileComplex";
import ContentTitle from "./ContentTitle";
import ButtonOutlinedWhite from "./buttons/ButtonOutlinedWhite";
import ButtonSaveChanges from "./buttons/ButtonSaveChanges";
import ButtonLostPet from "./buttons/ButtonLostPet";
import ButtonFoundPet from "./buttons/ButtonFoundPet";

const Content = (props) => {
    return (
        <div className={`${props.colQuantity} bg-white ${styles.mainContent} `}>

            <Route
                path={[`/${profilePage}`,`/${activitiesPage}`]}
                exact component={ContentTitle}/>




            <Switch>
                <Route
                    path={[`/${profilePage}`,`/${activitiesPage}`]}
                    exact component={ProfileComplex}/>
            </Switch>

            <Route path={`/${profilePage}`} exact>{
                <div className='mt-4 mr-2 float-right'>
                    <ButtonOutlinedWhite marginRight='mr-3'/>
                    <ButtonSaveChanges/>
                </div>
            }</Route>



        </div>
    );
};

export default Content;