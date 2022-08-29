import React, { Component } from 'react'
// import axios from 'axios';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';
// import img from './../../img/bg-img.jpg';


export class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // componentDidMount(){
    //     if(this.props.auth.isAuthenticated){
    //         this.props.history.push('/dashboard');
    //     }
    // }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
        if(nextProps.errors){
            this.setState({errors : nextProps.errors});
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const login = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(login);
        console.log(login);
        // axios
        // .post('/api/users/testLogin',login)
        // .then(res=>console.log(res.data))
        // .catch(err=>this.setState({ errors : err.response.data}));
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const {errors} = this.state;
        return (
            
            <div className='bg-img'>
                <div className="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">Log In</h1>
                                <p className="lead text-center">Sign In to your TraineeCommunity account</p>
                                <form onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                    <input onChange={this.onChange} type="email"  className={classnames("form-control form-control-lg",
                                            { 'is-invalid': errors.email }
                                        )}  placeholder="Email Address" name="email"  />
                                    {errors.email && (
                                            <div className='invalid-feedback'>{errors.email}
                                            </div>
                                        )}
                                </div>
                                <div className="form-group">
                                    <input onChange={this.onChange} type="password" className={classnames("form-control form-control-lg",
                                            { 'is-invalid': errors.password }
                                        )} placeholder="Password" name="password" />
                                        {errors.password && (
                                            <div className='invalid-feedback'>{errors.password}
                                            </div>
                                        )}
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      </div >
    ) 
    }
}

Login.propTypes = {
    loginUser : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired
};


const mapStateToProps = state =>({
    auth : state.auth,
    errors : state.errors
});

export default connect(mapStateToProps , {loginUser})(Login);
// export default Login