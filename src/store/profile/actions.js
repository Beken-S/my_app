import { CHANGE_NAME, TOGGLE_SHOW_NAME } from './actionTypes';

export const toggleShowName = {
  type: TOGGLE_SHOW_NAME,
};

export const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    name,
  };
};
