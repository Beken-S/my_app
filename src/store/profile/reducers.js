import { CHANGE_NAME, TOGGLE_SHOW_NAME } from './actionTypes';

const initialState = {
  name: 'User',
  showName: false,
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SHOW_NAME: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    default: {
      return state;
    }
  }
}
