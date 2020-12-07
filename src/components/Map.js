import React from 'react';
import styles from '../css_modules/map.module.css'
import {FaAngleLeft} from "react-icons/all";

const Map = () => {
    return (
        <div className={`${styles.mapWrapper} p-1`}>
            <div>
                <FaAngleLeft color='white' size='0.75em' className='mr-1'/>
                <span className={`${styles.expand}`}>Expand map</span>
            </div>
        </div>
    );
};

export default Map;