import { all } from 'redux-saga/effects';
import { watchAddMessage } from './messages';

export function* rootSaga() {
  yield all([watchAddMessage()]);
}
