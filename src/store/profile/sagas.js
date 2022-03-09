import { eventChannel } from 'redux-saga';
import {
  call,
  cancel,
  cancelled,
  fork,
  put,
  take,
  takeEvery,
} from 'redux-saga/effects';
import { onValue, set } from 'firebase/database';
import {
  getProfileShowUsernameRef,
  getProfileUsernameRef,
} from '../../services';
import {
  CHANGE_SHOW_USERNAME,
  CHANGE_USERNAME,
  getSetShowUsername,
  getSetUsername,
} from '.';
import { LOGOUT, SIGN_IN } from '..';

function getProfileUsernameChannel(userId) {
  return eventChannel((emitter) => {
    const unsubscribe = onValue(getProfileUsernameRef(userId), (snapshot) => {
      emitter(snapshot.val());
    });
    return unsubscribe;
  });
}

function getProfileShowUsernameChannel(userId) {
  return eventChannel((emitter) => {
    const unsubscribe = onValue(
      getProfileShowUsernameRef(userId),
      (snapshot) => {
        emitter(snapshot.val());
      }
    );
    return unsubscribe;
  });
}

function* getUsernameSocket(userId) {
  const usernameChannel = yield call(getProfileUsernameChannel, userId);

  try {
    while (true) {
      let username = yield take(usernameChannel);

      yield put(getSetUsername(username));
    }
  } catch (error) {
    console.warn(error);
  } finally {
    if (yield cancelled()) {
      usernameChannel.close();
    }
  }
}

function* getShowUsernameSocket(userId) {
  const showUsernameChannel = yield call(getProfileShowUsernameChannel, userId);

  try {
    while (true) {
      let showUsername = yield take(showUsernameChannel);

      yield put(getSetShowUsername(showUsername));
    }
  } catch (error) {
    console.warn(error);
  } finally {
    if (yield cancelled()) {
      showUsernameChannel.close();
    }
  }
}

function* watchProfile() {
  while (true) {
    const { payload: userId } = yield take(SIGN_IN);
    const usernameTask = yield fork(getUsernameSocket, userId);
    const showUsernameTask = yield fork(getShowUsernameSocket, userId);

    yield take(LOGOUT);

    yield cancel(usernameTask);
    yield cancel(showUsernameTask);
  }
}

function changeUsernameHandler(action) {
  const { userId, username } = action.payload;

  set(getProfileUsernameRef(userId), username);
}

function changeShowUsernameHandler(action) {
  const { userId, showUsername } = action.payload;

  set(getProfileShowUsernameRef(userId), showUsername);
}

function* watchChangeUsername() {
  yield takeEvery(CHANGE_USERNAME, changeUsernameHandler);
}

function* watchChangeShowUsername() {
  yield takeEvery(CHANGE_SHOW_USERNAME, changeShowUsernameHandler);
}

export { watchProfile, watchChangeUsername, watchChangeShowUsername };
