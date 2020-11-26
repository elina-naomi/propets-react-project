import React from 'react';
import Navigation from "./Navigation";
import ProfileBar from "./ProfileBar";

const SideBarLeft = () => {
    return (
        <div className={`col-2`}>
            <Navigation/>
        </div>
    );
};

export default SideBarLeft;