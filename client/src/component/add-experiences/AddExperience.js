import React from 'react'
import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { addExperience } from '../../actions/profileActions';

export class  AddExperience extends Component {

    constructor(props){
        super(props);

        this.state = {
            company : '',
            title : '',
            description : '',
            location : '',
            from : '',
            to : '',
            current : false,
            errors : {},
            disabled : false,

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onChange = (e) =>{
            this.setState({[e.target.name] : e.target.value});
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors : nextProps.errors});
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();

      const experienceDate ={
        company : this.state.company,
        title : this.state.title,
        location : this.state.location,
        from : this.state.from,
        to : this.state.to ,
        currnet : this.state.current ,
        description : this.state.description
      };

      this.props.addExperience(experienceDate , this.props.history);
    }

    onCheck = (e) =>{

            this.setState({disabled : this.state.disabled , 
            current  : this.state.current});
    }

    render(){

        const {errors} = this.state;
        return (
            <div>
    
                <div className="section add-education">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <Link to="/dashboard" className="btn btn-light">
                                    Go Back
                                </Link>
                                <h1 className="display-4 text-center">Add Your Experience</h1>
                                <p className="lead text-center">Add any companythat you have attend</p>
                                <small className="d-block pb-3 text-danger">* = required field</small>
                                <form action="/education" onSubmit={this.onSubmit}>
                                    <TextFieldGroup 
                                    placeholder='*Company name '
                                    name= "company"
                                    value={this.state.company}
                                    onChange ={this.onChange}
                                    error = {errors.company}
                                    />
                                     <TextFieldGroup 
                                    placeholder='* Title of your job'
                                    name= "title"
                                    value={this.state.title}
                                    onChange ={this.onChange}
                                    error = {errors.title}
                                    />
                                     <TextFieldGroup 
                                    placeholder='* Enter your Location '
                                    name= "location"
                                    value={this.state.location}
                                    onChange ={this.onChange}
                                    error = {errors.location}
                                    />
                                    <h6>From Date</h6>
                                     <TextFieldGroup 
                                     type='date'
                                    placeholder=''
                                    name= "from"
                                    value={this.state.from}
                                    onChange ={this.onChange}
                                    error = {errors.from}
                                    />
                                    <h6>To Date</h6>
                                     <TextFieldGroup 
                                     type='date'
                                    placeholder=''
                                    name= "to"
                                    value={this.state.to}
                                    onChange ={this.onChange}
                                    error = {errors.to}
                                    disabled={this.state.disabled ? 'disabled' : ''}
                                    />
                                    <div className="form-check mb-4">
                                        <input 
                                        onChange={this.onCheck} 
                                        type="checkbox"
                                         className="form-check-input"
                                          name="current"
                                           value={this.state.current}
                                            checked={this.state.current} 
                                            id='current'  />
                                        <label htmlFor="current" className="form-check-label" >Current job</label>
                                    </div>
                                    <TextAreaFieldGroup 
                                    placeholder='Program Description'
                                    name='description'
                                    value={this.state.value}
                                    onChange = {this.onChange}
                                    error = {errors.description}
                                    info = 'Tell us about the program that you were in '
                                    />
                                    <input type="submit" className="btn btn-info btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
   
}

AddExperience.propTypes = {
    addExperience : PropTypes.func.isRequired,
    profile : PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired
};

const mapStateToProps = (state) =>(
    {
        profile : state.profile , 
        errors : state.profile
    }
);

export default connect(mapStateToProps , {addExperience})(withRouter(AddExperience));
