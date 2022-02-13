import { CHANGE_USERNAME, TOGGLE_SHOW_USERNAME } from './actionTypes';

const changeUsername = (name) => {
  return {
    type: CHANGE_USERNAME,
    payload: name,
  };
};

const toggleShowUsername = () => {
  return {
    type: TOGGLE_SHOW_USERNAME,
  };
};

export { changeUsername, toggleShowUsername };
