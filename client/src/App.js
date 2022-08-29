import React from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/Navbar";
import Landing from "./component/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
// import AddEducation from './component/add-education/AddEducation';
import Profiles from "./component/profiles/Profiles";
// import Dashboard from './component/dashboard/Dashboard';
import Dashboard from "./component/dashboard/Dashboard";
// import Logout from './component/auth/Logout';
import Posts from "./component/posts/Posts";
import CreateProfile from "./component/create-profiles/CreateProfile";
import PrivateRoute from "./component/common/PrivateRoute";
import AuthPrivateRoute from "./component/common/AuthPrivateRoute";
import EditProfile from "./component/edit-profile/EditProfile";
import AddEducation from "./component/add-education/AddEducation";
import AddExperience from "./component/add-experiences/AddExperience";
import Profile from "./component/profile/Profile";
import { getProfiles } from "./actions/profileActions";
import Post from "./component/Post/Post";

//check for the  token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  // decode token and  get userr info and exp
  const decode = jwt_decode(localStorage.jwtToken);
  //set user and  isAuthicated
  store.dispatch(setCurrentUser(decode));
  //check for the expire token
  const currnetTime = Date.now() / 1000;
  if (decode.exp < currnetTime) {
    // logout user
    store.dispatch(logoutUser());
    // TODO Clear current Profile
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing}></Route>
            <div className="container">
              {/* <Route exact path="/Register" component={Register}>
              </Route> */}
              {/* <Route exact path="/Login" component={Login}>
              </Route> */}
            </div>
            <Route exact path="/Profiles" component={Profiles}></Route>
            <Route exact path="/post/:id" component={Post}></Route>
            <Route exact path="/profile/:handle" component={Profile}></Route>
            <Switch>
              <PrivateRoute
                exact
                path="/Dashboard"
                component={Dashboard}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              ></PrivateRoute>
              <AuthPrivateRoute
                exact
                path="/login"
                component={Login}
              ></AuthPrivateRoute>
              <AuthPrivateRoute
                exact
                path="/register"
                component={Register}
              ></AuthPrivateRoute>
            </Switch>
            <Route exact path="/feed" component={Posts}></Route>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

// import './App.css';
// import Footer from './component/layout/Footer';
// import Navbar from './component/layout/Navbar';
// import Landing from './component/layout/Landing';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Register from './component/auth/Register';
// import Login from './component/auth/Login';
// import AddEducation from './component/add-education/AddEducation';
// import Profiles from './component/profiles/Profiles';
// import Profile from './component/profile/Profile';

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <Route path="" component={Navbar}/>
//         <Route exact path="/" component={Landing}/>
//         <div className='container'>
//           <Route exact path="/register" component={Register}/>
//           <Route exact path="/login" component={Login}/>
//           <Route exact path="/education" component={AddEducation}/>
//           <Route exact path="/profiles" component={Profiles}/>
//           <Route exact path="/profile" component={Profile}/>
//         </div>
//         <Route path="" component={Footer}/>
//       </div>
//     </Router>
//   );
// }

// export default App;
