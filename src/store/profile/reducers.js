import { SET_SHOW_USERNAME, SET_USERNAME } from '.';
import { LOGOUT } from '..';

const initialState = {
  username: null,
  showUsername: null,
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    case SET_SHOW_USERNAME: {
      return {
        ...state,
        showUsername: action.payload,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
