import React from 'react';
import SimplePost from "../posts/SimplePost";

const MainPageContent = (props) => {
    return (
        <div className={`${props.marginTop}`}>
            <SimplePost/>
            <SimplePost/>
            <SimplePost/>
            <SimplePost/>
            <SimplePost/>

        </div>
    );
};

export default MainPageContent;