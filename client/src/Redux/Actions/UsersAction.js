import { 
    GET_ERRORS, 
    SET_CURRENT_USER, 
 
  } from "../types";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const loginUser = userData => dispatch => {
  console.log("api call",userData )
  axios
    .post("http://localhost:8000/api/users/login", userData)
    .then(res => {
      console.log(res.data);
      // Save to localStorage
      const { token } = res.data;
      // set token to localstorage
      localStorage.setItem("jwtToken", token);
      // decode token to get user data
      const decoded = jwt_decode(token);
      console.log(decoded)
      // set current user
      dispatch(setCurrentUser(decoded)); 
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    
     }
    );
};

export const logoutUser = () => dispatch => {
  console.log("call logoutUser action")
  // remove token from local storage
  localStorage.removeItem("jwtToken");
  // set current user to emty object which will also set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};