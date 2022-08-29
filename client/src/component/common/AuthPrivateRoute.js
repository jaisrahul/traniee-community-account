import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";


export const  AuthPrivateRoute = ({ component : Component , 
auth , ...rest }) =>(

    <Route {...rest} render = {props =>
        auth.isAuthenticated ===false ? (<Component{...props} />) : ( <Redirect to='/Dashboard' />)
    }/>
)

AuthPrivateRoute.propTypes = {
    auth : PropTypes.object.isRequired,
};

const mapStateToProps = state => ({

    auth : state.auth,

});

export default connect(mapStateToProps) (AuthPrivateRoute);