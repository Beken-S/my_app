import { all } from 'redux-saga/effects';
import { watchAddMessage } from './messages';
import { watchFetchGists } from './gists';

export function* rootSaga() {
  yield all([watchAddMessage(), watchFetchGists()]);
}
