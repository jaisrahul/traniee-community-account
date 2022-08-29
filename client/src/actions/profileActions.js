import axios from 'axios';
import  {GET_PROFILE,
    GET_PROFILES,
    SET_CURRENT_USER,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE,
    GET_ERRORS,
} from './types.js';

// Get Current Profile
    export const getCurrentProfile= () => dispatch =>{
        dispatch(setProfileLoading());
        axios
        .get("/api/profile/")
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
            );
    };

    export const getProfileByHandle = handle => dispatch =>{
        dispatch (setProfileLoading());
        axios
        .get(`/api/profile/handle/${handle}`)
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: err.data
            })
        );
    };


    // Create Profile
    export const createProfile = (profileData, history) => dispatch =>{
        axios
        .post("/api/profile/",profileData)
        .then(res => history.push("/dashboard"))
        .catch(err =>
            {
            // console.log(err)
            dispatch({
                type:GET_ERRORS,
                payload: err.response.data
            })
        }
        );
    };

    export const addExperience =(expData, history) => dispatch =>{
        axios
        .post("/api/profile/experience",expData)
        .then(res => history.push("/dashboard"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
    };

    export const addEducation =(eduData, history) => dispatch =>{
        axios
        .post("/api/profile/education",eduData)
        .then(res => history.push("/dashboard"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.res.data
            })
        );
    };

    export const deleteExperience = id => dispatch =>{
        axios
        .delete(`/api/profile/experience/${id}`)
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.res.data
            })
        );
    };

    export const deleteEducation = id => dispatch =>{
        axios
        .delete(`/api/profile/education/${id}`)
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.res.data
            })
        );
    };

    export const getProfiles = () => dispatch =>{
        dispatch(setProfileLoading());
        axios
        .get("/api/profile/all")
        .then( res =>
            dispatch({
                type: GET_PROFILES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILES,
                payload: null
            })
        );
    };

    export const deleteAccount = () => dispatch =>{
        if (window.confirm("Are you sure? This can Not be Undone ")){
            axios
            .delete("/api/profile")
            .then(res =>
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            )
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.resposnse.data
                })
            )
        }
        return{
            type: PROFILE_LOADING
        };
    };

    // Profile Loading
    export const setProfileLoading =() =>{
        return{
            type: PROFILE_LOADING
        };
    };

    // Clear Profile
    export const clearCurrentProfile =() =>{
        return{
            type: CLEAR_CURRENT_PROFILE
        };
    };