import {
  SIGN_IN,
  FETCH_SIGN_IN,
  SIGN_IN_FAILURE,
  SIGN_UP,
  FETCH_SIGN_UP,
  SIGN_UP_FAILURE,
  LOGOUT,
  FETCH_LOGOUT,
} from '.';

const getSignIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

const getFetchSignIn = ({ email, password }) => {
  return {
    type: FETCH_SIGN_IN,
    payload: { email, password },
  };
};

const getSignInFailure = (error) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};

const getSignUp = (userId) => {
  return {
    type: SIGN_UP,
    payload: userId,
  };
};

const getFetchSignUp = ({ name, email, password }) => {
  return {
    type: FETCH_SIGN_UP,
    payload: { name, email, password },
  };
};

const getSignUpFailure = (error) => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};

const getLogout = () => {
  return {
    type: LOGOUT,
  };
};

const getFetchLogout = () => {
  return {
    type: FETCH_LOGOUT,
  };
};

export {
  getSignIn,
  getFetchSignIn,
  getSignInFailure,
  getSignUp,
  getFetchSignUp,
  getSignUpFailure,
  getLogout,
  getFetchLogout,
};
