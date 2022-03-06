import { SIGN_IN, SIGN_IN_FAILURE, SIGN_UP, SIGN_UP_FAILURE, LOGOUT } from '.';

const initialStateAuth = {
  status: false,
  userId: null,
  error: null,
};

function authReducer(state = initialStateAuth, action) {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        status: true,
        userId: action.payload,
      };
    }
    case SIGN_IN_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        status: true,
        userId: action.payload,
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case LOGOUT: {
      return {
        status: false,
        userId: null,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
}

export { authReducer };
