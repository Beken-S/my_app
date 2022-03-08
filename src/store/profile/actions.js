import {
  CHANGE_USERNAME,
  CHANGE_SHOW_USERNAME,
  SET_USERNAME,
  SET_SHOW_USERNAME,
} from '.';

const getChangeUsername = (userId, username) => {
  return {
    type: CHANGE_USERNAME,
    payload: { userId, username },
  };
};

const getChangeShowUsername = (userId, showUsername) => {
  return {
    type: CHANGE_SHOW_USERNAME,
    payload: { userId, showUsername },
  };
};

const getSetUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  };
};

const getSetShowUsername = (showUsername) => {
  return {
    type: SET_SHOW_USERNAME,
    payload: showUsername,
  };
};

export {
  getChangeUsername,
  getChangeShowUsername,
  getSetUsername,
  getSetShowUsername,
};
