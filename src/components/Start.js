import React from 'react';
import HeaderGreen from "./HeaderGreen";
import StartContent from "./StartContent";
import Footer from "./Footer";

const Start = (props) => {
    return (
        <div>
            <HeaderGreen signIn={props.signIn}/>
            <StartContent signIn={props.signIn}/>
            <Footer signIn={props.signIn}/>
        </div>
    );
};

export default Start;