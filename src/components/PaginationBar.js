import React from 'react';
import Pagination from "react-router-pagination";
import styles from '../css_modules/pagination.module.css'

const PaginationBar = ({pageNumber, totalPages}) => {
    return (
        <div className='paginationBar'>
            <Pagination
                match={{
                    path: '/main/:pageNumber',
                    params: {
                        pageNumber: 1 /* or any integer */
                    }
                }}
                totalPages={totalPages}
                pageNumber={pageNumber}
            />
        </div>
    );
};

export default PaginationBar;