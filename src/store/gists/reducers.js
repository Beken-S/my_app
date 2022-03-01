import { STATUSES } from '../../utils';
import { GET_GISTS_REQUEST, GET_GISTS_SUCCESS, GET_GISTS_FAILURE } from '.';

const initialStateGists = [];

function gistsReducer(state = initialStateGists, action) {
  switch (action.type) {
    case GET_GISTS_SUCCESS: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
}

const initialStateGistsRequest = {
  status: STATUSES.IDLE,
  error: null,
};

function gistsRequestReducer(state = initialStateGistsRequest, action) {
  switch (action.type) {
    case GET_GISTS_REQUEST: {
      return {
        status: STATUSES.REQUEST,
        error: null,
      };
    }
    case GET_GISTS_SUCCESS: {
      return {
        ...state,
        status: STATUSES.SUCCESS,
      };
    }
    case GET_GISTS_FAILURE: {
      return {
        status: STATUSES.FAILURE,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export { gistsReducer, gistsRequestReducer };
