// import { connect } from 'react-redux';
// import PropTypes  from 'prop-types';
// import { logoutUser } from "../../actions/authActions";
// import React , { Component } from 'react';

// class Logout extends Component{

// constructor(){
//     super();
// }

// componentDidMount(){
//     this.props.logoutUser();
//     window.location.href = './login';
// }
//     render(){
//         return(
//             <>
//             <h1>You are Logout</h1>
//             </>
//         );
//     }
// }

// // Logout.propTypes = {
// //     logoutUser : PropTypes.func.isRequired,
// //     auth : PropTypes.object.isRequired,
// //     errors : PropTypes.object.isRequired
// // };


// // const mapStateToProps = state =>({
// //     auth : state.auth,
// //     errors : state.errors
// // });


// export default connect(null , {logoutUser})(Logout);