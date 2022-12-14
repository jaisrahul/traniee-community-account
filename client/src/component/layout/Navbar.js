import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { logoutUser} from '../../actions/authActions';
import {clearCurrentProfile , getCurrentProfile} from '../../actions/profileActions'
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';


export  class Navbar extends Component {

    onLogoutClick(e){
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
        window.location.href = './login';
    }
    

   

   render(){

    const {isAuthenticated , user}=this.props.auth;
    let  authLinks ='';
    let  guestLinks = '';
    if(isAuthenticated){
        // const {profile} = this.props.profile;
          authLinks = (
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <Link to='/feed' className='nav-link'>Post Feed</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Dashboard' className='nav-link'>Dashboard</Link>
                </li>
                <li className='nav-item'>
                    <Link to={`/profile/`} className='nav-link'>Profile</Link>
                </li>
                <li className='nav-item'>
                    <a href='' onClick={this.onLogoutClick.bind(this)} className='nav-link'>
                        <img className='rounded-circle' src={user.avatar}
                        alt={user.name} style={{width : '25px' , marginRight : '5px'}} title ='You must have use gravatar connected to your email to display an image'/>
                        {''}
                        Logout
                    </a>
                </li>
            </ul>
        );
    
    }
    else {
         guestLinks = (
            <ul className='navbar-nav mi-auto'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/register'>SignUp</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/login'>Login</Link>
                </li>
            </ul>
        ) 
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">TraineeCommunity</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profiles">{''} Traineed</Link>
                            </li>
                        </ul>
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        </div>
    );
   }
}

Navbar.propTypes = {
    logoutUser : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    getCurrentProfile : PropTypes.object.isRequired,
    profile : PropTypes.object.isRequired
    // errors : PropTypes.object.isRequired
};


const mapStateToProps = state =>({
    auth : state.auth,
    errors : state.errors,
    profile : state.profile
});

export default connect(mapStateToProps , {logoutUser , clearCurrentProfile , getCurrentProfile})(Navbar);
