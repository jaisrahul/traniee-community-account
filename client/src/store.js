// import { createStore, applyMiddleware, compose } from 'redux'; 
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; 
import rootReducer from './reducers/index';
const initialState = {};
const middleware = [thunk];

// const store = configureStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window._REDUX_DEVTOOLS_EXTENSION_____
//     &&
//     window._REDUX_DEVTOOLS_EXTENSION___()) n
// );

const store = configureStore({
  reducer : rootReducer,
  middleware : middleware,
  initialState
});
export default store;