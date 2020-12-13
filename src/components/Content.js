import React from 'react';
import styles from "../css_modules/content.module.css";
import {Route, Switch} from "react-router-dom";
import {
    activitiesPage,
    lostPage,
    mainPage,
    newFoundPostPage,
    newLostPostPage,
    newMessagePostPage,
    profilePage
} from "../utils/constants";
import ProfileComplex from "../reduxTools/containers/ProfileComplexContainer";
import ContentTitle from "./ContentTitle";
import SimplePost from "./posts/SimplePost"
import LostPageContent from "./contents/LostPageContent";
import MainPageContent from "./contents/MainPageContent";
import SimplePostForm from "../reduxTools/containers/SimplePostFormContainer";
import LostPostForm from "./forms/LostPostForm";

const Content = (props) => {

    return (
        <div className={`${props.colQuantity} bg-white ${styles.mainContent} `}>

            {/*Отображение ContentTitle*/}
            <Route
                path={[`/${profilePage}`, `/${activitiesPage}`,`/${newMessagePostPage}`,`/${newLostPostPage}`, `/${newFoundPostPage}`]}
                exact component={ContentTitle}/>


            <Switch>
                <Route
                    path={[`/${profilePage}`, `/${activitiesPage}`]}
                    exact component={ProfileComplex}>
                </Route>
                <Route
                    path={[`/${mainPage}`]}
                    exact><MainPageContent marginTop='mt-3'/>
                </Route>
                <Route
                    path={[`/${lostPage}`]}
                    exact><LostPageContent marginTop='mt-4'/>
                </Route>
                <Route
                    path={[`/${newMessagePostPage}`]}
                    exact><SimplePostForm/>
                </Route>
                <Route
                    path={[`/${newLostPostPage}`]}
                    exact><LostPostForm/>
                </Route>

            </Switch>



        </div>
    );
};

export default Content;