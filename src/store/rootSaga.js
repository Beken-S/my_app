import { all } from 'redux-saga/effects';
import {
  watchFetchSignIn,
  watchFetchSignUp,
  watchLogout,
  watchAuth,
} from './auth';
import {
  watchChangeShowUsername,
  watchChangeUsername,
  watchProfile,
} from './profile';
import { watchAddChat, watchChats, watchDeleteChat } from './chats';
import {
  watchAddMessage,
  watchDeleteMessage,
  watchDeleteMessageList,
  watchMessages,
} from './messages';
import { watchFetchGists } from './gists';

export function* rootSaga() {
  yield all([
    watchAuth(),
    watchFetchSignIn(),
    watchFetchSignUp(),
    watchLogout(),
    watchProfile(),
    watchChangeUsername(),
    watchChangeShowUsername(),
    watchChats(),
    watchAddChat(),
    watchDeleteChat(),
    watchMessages(),
    watchAddMessage(),
    watchDeleteMessage(),
    watchDeleteMessageList(),
    watchFetchGists(),
  ]);
}
