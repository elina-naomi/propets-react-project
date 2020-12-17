import React from 'react';
import Navigation from "./Navigation";

const SideBarLeft = (props) => {
    return (
        <div className={`col-2`}>
            <Navigation  location={props.location}/>
        </div>
    );
};

export default SideBarLeft;