import { GET_GISTS } from '.';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
  getGistsRequest,
  getGistsSuccess,
  getGistsFailure,
  getGistsData,
} from '.';

function* fetchGists() {
  try {
    yield put(getGistsRequest());
    const data = yield call(getGistsData);
    yield put(getGistsSuccess(data));
  } catch (error) {
    yield put(getGistsFailure(error.message));
  }
}

function* watchFetchGists() {
  yield takeLatest(GET_GISTS, fetchGists);
}

export { watchFetchGists };
