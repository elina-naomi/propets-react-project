import React from 'react';
import styles from "../css_modules/content.module.css";
import {Route, Switch} from "react-router-dom";
import {activitiesPage, profilePage} from "../utils/constants";
import ProfileComplex from "./ProfileComplex";
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

            {/*Отображение кнопок Save и Cancel*/}
            <Route path={`/${profilePage}`} exact>{
                <div className='mt-4 mr-2 pb-2 float-right'>
                    <ButtonOutlinedWhite marginRight='mr-3'/>
                    <ButtonSaveChanges/>
                </div>
            }</Route>


        </div>
    );
};

export default Content;