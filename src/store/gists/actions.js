import { API, filterGistsData } from '../../utils';
import {
  GET_GISTS,
  GET_GISTS_REQUEST,
  GET_GISTS_SUCCESS,
  GET_GISTS_FAILURE,
} from '.';

const getGists = () => {
  return {
    type: GET_GISTS,
  };
};

const getGistsRequest = () => {
  return {
    type: GET_GISTS_REQUEST,
  };
};

const getGistsSuccess = (payload) => {
  return {
    type: GET_GISTS_SUCCESS,
    payload,
  };
};

const getGistsFailure = (error) => {
  return {
    type: GET_GISTS_FAILURE,
    payload: error,
  };
};

const getGistsData = async () => {
  const response = await fetch(API.GET_GISTS, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const responseJSON = await response.json();
  const result = filterGistsData(responseJSON);
  return result;
};

export {
  getGists,
  getGistsRequest,
  getGistsSuccess,
  getGistsFailure,
  getGistsData,
};
