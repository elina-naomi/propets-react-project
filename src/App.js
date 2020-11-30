import './App.css';
import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loginAction} from "./reduxTools/actions/loginActions";
import Home from "./reduxTools/containers/HomeContainer";
import {Spinner} from "react-bootstrap";

const App = (props) => {
    const token = localStorage.getItem('token');


    useEffect(() => {
        if (token) {
            props.login(token);
        }
    },[]);


    if(!token) {
        return (
            <Home/>
        );
    } else {
        if(!props.user) {
            return (
                <Spinner animation="grow"/>
            );
        } else {
            return (
                <Home/>
            );
        }
    }



};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: loginAction
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        message: state.message,
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
