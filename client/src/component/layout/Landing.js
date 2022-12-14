import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

export class Landing extends Component {

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
    this.props.history.push('/');
    }
  }
  render() {

    const {isAuthenticated , user} = this.props.auth;

    const authList = (
      <div>
        <h2 className='font-weight-bold'></h2>
      </div>
    );

    const guestLinks = (

      <div><Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
      <Link to="/login" className="btn btn-lg btn-light">Login</Link></div>
    );

    return (
      <div>
          <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4  font-weight-bold">Trainee Connector</h1>
                                <p className="lead"> Create a Trainee profile/portfolio, share posts and get help from other Trainees</p>
                                <hr />
                                {isAuthenticated ? authList : guestLinks}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

Landing.propTypes={
  auth : PropTypes.object.isRequired
};

const mapStateToProps = state =>({
  auth : state.auth
});
export default connect(mapStateToProps)(Landing);