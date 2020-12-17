import React, {Fragment, useEffect, useState} from 'react';
import SimplePost from "../posts/SimplePost";
import {Spinner} from "react-bootstrap";
import {baseUrlMessaging} from "../../utils/constants";
import moment from "moment";
import PaginationBar from "../PaginationBar";

const defaultPage = 1;

const MainPageContent = (props) => {
    console.log(props);
    const [posts, setPosts] = useState(null);
    const [page, setPage] = useState((props.match.params.number) || defaultPage);
    const [pages, setPages] = useState(null);


    const getPage = () => {
        let numberPage = (props.match.params.number) || defaultPage;
        setPage(numberPage);
        return numberPage;
    }


    useEffect(() => {
        setPosts(null);
        // getPage();
        fetch(`${baseUrlMessaging}/view/?itemsOnPage=10&currentPage=${getPage()-1}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': props.token
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log('ok');
                    return response.json()
                } else {
                    throw new Error('Failed to post message');
                }
            })
            .then(result => {
                console.log(result);
                setPosts(result.content);
                setPages(result.totalPages);
            })
            .catch(e => {
                console.log(e.message)
            });
    }, [props.match.params.number])

    function handleData(inputDate) {
        const ms = Date.parse(inputDate);
        const newDate = moment(ms).calendar();
        return newDate;
    }

    if (posts) {
        return (
            <Fragment>
                <div className={`${props.marginTop}`}>
                    {posts.map((post, index) => <SimplePost
                        userName={post.userName} avatar={post.avatar} datePost={handleData(post.datePost)}
                        text={post.text} images={post.images[0]}
                        key={index}/>)}
                </div>
                <PaginationBar totalPages={pages} pageNumber={page}/>
            </Fragment>

        );
    } else {
        return (
            <div className={`${props.marginTop}`}>
                <Spinner animation="grow"/>
            </div>
        )
    }


};

export default MainPageContent;