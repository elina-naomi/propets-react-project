import React from 'react';
import logo from '../images/Group 1.svg';
import {FaDog, FaFacebook, FaHotel, FaInstagram, FaPaw, FaSearch, FaStethoscope, FaWalking} from "react-icons/all";
import {Link} from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="jumbotron-fluid footer-wrapper">
            <div className="container-sm footer py-3 py-md-5">
                <div className="row align-items-center justify-content-between">
                    {/*Brand*/}
                    <div className="col-12 col-md-6 col-lg-7 py-md-0 py-3 px-md-3 px-4">
                        <div className="row align-items-center justify-content-between flex-md-column flex-lg-row">
                            <a className="col-12 col-lg-6" href="/home">
                                <img className="logo" src={logo} alt="Logo"/>
                            </a>
                            <div className="col-12 col-lg-6">
                                <div className="my-4 my-lg-0">
                                    <Link to={{ pathname: "https://www.facebook.com" }} target="_blank"><FaFacebook className='fab'/></Link>
                                    <Link to={{ pathname: "https://www.instagram.com" }} target="_blank"><FaInstagram className='fab'/></Link>
                                </div>
                                <address>
                                    <p className="address">1600 Amphitheatre Pkwy<br/>Mountain View, CA 94043, USA</p>
                                </address>
                            </div>
                        </div>


                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <ul className="row">
                            <li onClick={()=>{props.signIn()}} className="col-12 col-md-6 order-0 order-md-0">
                                <FaSearch color='white' className='mr-3'/>Lost</li>
                            <li onClick={()=>{props.signIn()}}  className="col-12 col-md-6 order-1 order-md-2">
                                <FaPaw color='white' className='mr-3'/>Found</li>
                            <li onClick={()=>{props.signIn()}}  className="col-12 col-md-6 order-2 order-md-4">
                                <FaStethoscope color='white' className='mr-3'/>VetHelp</li>
                            <li onClick={()=>{props.signIn()}}  className="col-12 col-md-6 order-3 order-md-1">
                                <FaHotel color='white' className='mr-3'/>Hotels</li>
                            <li onClick={()=>{props.signIn()}}  className="col-12 col-md-6 order-4 order-md-3">
                                <FaWalking color='white' className='mr-3'/>Walking</li>
                            <li onClick={()=>{props.signIn()}}  className="col-12 col-md-6 order-5 order-md-5">
                                <FaDog color='white' className='mr-3'/>Fostering</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;