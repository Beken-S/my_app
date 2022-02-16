import { CHANGE_USERNAME, TOGGLE_SHOW_USERNAME } from './actionTypes';

const initialState = {
  username: 'User',
  showUsername: false,
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    default: {
      return state;
    }
    case TOGGLE_SHOW_USERNAME: {
      return {
        ...state,
        showUsername: !state.showUsername,
      };
    }
  }
}
