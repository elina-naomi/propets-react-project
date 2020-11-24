import React, {Fragment, useState} from 'react';
import searchIcon from '../images/Group 11.svg';
import animals from '../images/8347@2x.png';
import heartIcon from '../images/003-heart.svg';
import {FaCircle} from "react-icons/all";



const StartContent = (props) => {
    const [lostButtonHoverStyle, setLostButtonHoverStyle] = useState('');
    const [foundButtonHoverStyle, setFoundButtonHoverStyle] = useState('');

    const [lostMessage, setLostMessage] = useState('I lost my pet!')
    const [findMessage, setFindMessage] = useState('I found a pet!')



    return (
        <Fragment>
            <section className="container-fluid main-puppy">
                <div className="main-wrapper container-xl">
                    <div className="row">
                        <h1 className="col-xl-6 col-md-7 col-sm-12 py-5 px-lg-4 px-3 mb-3 mt-md-5">Welcome to
                            your <span>pawfessional </span>
                            community!</h1>

                    </div>
                </div>

                <div className={`row lost-button-wrapper ${lostButtonHoverStyle}`}>
                    <div className="container-xl">
                        <div className="row">
                            <div onClick={()=> {props.signIn()
                            }} onMouseOver={()=>{
                                setLostButtonHoverStyle('wrapper-lost-button-hover');
                                setLostMessage('Click to find');
                            }} onMouseOut={()=>{
                                setLostButtonHoverStyle('');
                                setLostMessage('I lost my pet!');
                            }} className="col-7 col-md-5 lost-button">
                                <div className="py-4 px-3 mr-4 mr-sm-0">
                                    <h2 className="text-button">{lostMessage}</h2>
                                    <img className="icon-search" src={searchIcon} alt="search-icon"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`row found-button-wrapper ${foundButtonHoverStyle}`}>
                    <div className="container-xl">
                        <div className="row">
                            <div onClick={()=> {props.signIn()
                            }} onMouseOver={()=>{
                                setFoundButtonHoverStyle('wrapper-found-button-hover');
                                setFindMessage('What to do?')
                            }} onMouseOut={()=>{
                                setFoundButtonHoverStyle('');
                                setFindMessage('I found a pet!')
                            }} className="col-6 col-md-4 found-button pr-0">
                                <div id="c" className="py-4 pl-3">
                                    <h2 className="text-button">{findMessage}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xl text-with-link">
                    <div className="row">
                        <p className="col-md-12 col-9 pl-xl-4 ml-xl-2 my-md-4 my-3 pt-lg-2 pt-md-4">
                            I’m okay, just want to <span
                            onClick={()=> {props.signIn()}}
                            className="text-uppercase font-weight-bolder">join</span> the pawsome community!
                        </p>
                    </div>
                </div>
            </section>


            <section className="jumbotron-fluid green-wrapper">
                <div className="container-sm">
                    <div className="row text-center justify-content-center py-2">
                        <h2 className="col-10 col-xl-9 py-md-5 py-3 my-4">Our fluffy space for lovers, admirers, dads and moms
                            of our
                            four-legged, winged, tailed
                            guys.</h2>
                    </div>
                </div>
            </section>

            <section className="container list-pet-needs-wrapper">
                <div className="row pt-lg-5 pb-lg-4 pb-3 my-lg-4">
                    <div className="col-md-9 col-lg-5 py-md-4 pb-5 animals-picture">
                        <img src={animals} alt="animals" width="100%"/>
                    </div>
                    <div className="px-lg-0 px-md-5 px-5 col-md-10 col-lg-7 list-items">
                        <h3 className="d-flex col-md-9 col-lg-10 col-xl-12 p-0">Here is collected everything that your pet
                            needs:</h3>
                        <ul>
                            <li>
                                <FaCircle size='0.8em' className='list-point'/>
                                professional veterinarian tips;
                            </li>
                            <li>
                                <FaCircle size='0.8em' className='list-point'/>
                                useful information about education and care;
                            </li>
                            <li>
                                <FaCircle size='0.8em' className='list-point'/>
                                fostering home search;
                            </li>
                            <li>
                                <FaCircle size='0.8em' className='list-point'/>
                                information about pet-sitting and walking service;
                            </li>
                            <li>
                                <FaCircle size='0.8em' className='list-point'/>
                                and of course, great communication with new friends in your social network!
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="jumbotron-fluid orange-wrapper">
                <div className="container-sm py-xl-0 py-2">
                    <div className="row align-items-center py-xl-3 py-4">
                        <h2 className="col-xl-5 col-lg-6 col-md-5 text-md-left pb-sm-0 pb-3 text-center">Coming soon</h2>
                        <p className="col-xl-5 col-lg-6 col-md-7 text-md-left text-center px-md-0 px-5">We are planing to open a
                            new
                            service, <br className="divider"/>where
                                your cats and dogs can find their love!</p>
                        <div className="col-xl-2 heart-icon-wrapper">
                            <img src={heartIcon} width="104px" alt="heart icon"/>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>


    );
};

export default StartContent;