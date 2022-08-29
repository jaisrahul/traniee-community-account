import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export class ProfileActions extends Component {

  constructor(){
      super();


      // this.onExpDelete = this.onExpDelete.bind(this);
  }


//   onExpDelete = (e) =>{
//     console.log(this.props.experience._id);
//     this.props.deleteExperience(this.props.experience._id);

// }


    render(){

      const {experience , education } = this.props;

      return (
        <div>
              {/* <p className="lead text-muted">Welcome {profile.user.name}</p> */}
        
              {/* <!-- Dashboard Actions --> */}
              <div className="btn-group mb-4" role="group">
                <Link to="/edit-profile" className="btn btn-light">
                  <i className="fa fa-user-circle text-info mr-1"></i> Edit Profile
                </Link>
                <Link to="/add-experience" className="btn btn-light">
                  <i className="fab fa-black-tie text-info mr-1"></i>Add Experience
                </Link>
                <Link to="/add-education" className="btn btn-light">
                  <i className="fas fa-graduation-cap text-info mr-1"></i> Add Education
                </Link>
              </div>
            </div>
          );

    }
};

// ProfileActions.propTypes = {
//   deleteAccount : PropTypes.func.isRequired , 
//   deleteEducation : PropTypes.func.isRequired , 
//   deleteExperience : PropTypes.func.isRequired ,
// }

// const mapStateToProps = (state) =>({
//     profile : state.profile , 
//     errors : state.errors
// })

export default (ProfileActions);
