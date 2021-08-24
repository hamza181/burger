import * as actionTypes from "../constant/burger";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSucces = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCES,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    console.log(authData);
    axios.post(
        // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBy33M3B2F7nh6vGV6Ur2vRar24UIElLyk",
        'https://jsonplaceholder.typicode.com/posts',
        authData
      )
      .then((response) => {
        console.log(response);
        dispatch(authSucces(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
