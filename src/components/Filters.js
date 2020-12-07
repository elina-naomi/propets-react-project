import React, {Fragment} from 'react';
import styles from "../css_modules/filters.module.css"

const Filters = () => {
    return (
        <Fragment>
            <input type='text' title='type' placeholder='Type' className={`px-2 py-1 ${styles.filterInput} ${styles.twoPart}`}/>
            <input type='text' title='breed' placeholder='Breed' className={`px-2 py-1 ${styles.filterInput} ${styles.twoPart}`}/>
            <input type='text' title='features' placeholder='Additional features' className={`px-2 py-1 ${styles.filterInput} ${styles.fourPart}`}/>
            <input type='text' title='location' placeholder='Location' className={`px-2 py-1 ${styles.filterInput} ${styles.threePart}`}/>
        </Fragment>
    );
};

export default Filters;