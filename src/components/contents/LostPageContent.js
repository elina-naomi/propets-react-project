import React from 'react';
import LostPost from "../posts/LostPost";
import Filters from "../Filters";
import Map from "../Map";

const LostPageContent = (props) => {
    return (
        <div className={`row ${props.marginTop}`}>
            <div className='container-sm'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between'>
                        <Filters/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-9 mt-2'>
                        <LostPost/>
                        <LostPost/>
                        <LostPost/>
                        <LostPost/>

                    </div>
                    <div className='col-3 mt-2 pl-0'>
                        <Map/>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default LostPageContent;