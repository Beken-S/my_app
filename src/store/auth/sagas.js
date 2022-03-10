import { eventChannel } from 'redux-saga';
import { put, call, takeLatest, take } from 'redux-saga/effects';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { set } from 'firebase/database';
import {
  FETCH_SIGN_IN,
  FETCH_SIGN_UP,
  FETCH_LOGOUT,
  getSignIn,
  getSignInFailure,
  getSignUpFailure,
  getLogout,
} from '.';
import { auth, getProfileRef } from '../../services';

function* fetchSignIn(action) {
  const { email, password } = action.payload;

  try {
    yield call(signInWithEmailAndPassword, auth, email, password);
  } catch (error) {
    yield put(getSignInFailure(error));
  }
}

function* fetchSignUp(action) {
  const { name, email, password } = action.payload;

  try {
    if (!Boolean(name)) throw new Error('Username field is empty.');

    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );

    yield call(set, getProfileRef(userCredential.user.uid), {
      username: name,
      showUsername: false,
    });
  } catch (error) {
    console.log(error);

    yield put(getSignUpFailure(error.message));
  }
}

function* fetchLogout() {
  yield call(signOut, auth);
}

function* watchFetchSignIn() {
  yield takeLatest(FETCH_SIGN_IN, fetchSignIn);
}

function* watchFetchSignUp() {
  yield takeLatest(FETCH_SIGN_UP, fetchSignUp);
}

function* watchLogout() {
  yield takeLatest(FETCH_LOGOUT, fetchLogout);
}

function getAuthChannel() {
  return eventChannel((emitter) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      emitter({ user });
    });
    return unsubscribe;
  });
}

function* watchAuth() {
  const channel = yield call(getAuthChannel);
  try {
    while (true) {
      let { user } = yield take(channel);
      if (user) {
        yield put(getSignIn(user.uid));
      } else {
        yield put(getLogout());
      }
    }
  } catch (error) {
    yield put(getSignInFailure(error));
  }
}

export {
  fetchSignUp,
  fetchSignIn,
  fetchLogout,
  watchFetchSignIn,
  watchFetchSignUp,
  watchLogout,
  watchAuth,
};
