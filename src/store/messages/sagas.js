import { eventChannel } from 'redux-saga';
import {
  call,
  take,
  cancelled,
  fork,
  cancel,
  takeEvery,
  put,
} from 'redux-saga/effects';
import { onChildAdded, onChildRemoved, remove, set } from 'firebase/database';
import {
  FETCH_ADD_MESSAGE,
  FETCH_DELETE_MESSAGE,
  getAddMessage,
  getClearMessages,
  getDeleteMessage,
} from '.';
import { CHANGE_CURRENT_CHAT, FETCH_DELETE_CHAT, LOGOUT } from '..';
import {
  getMessageRef,
  getMessageListRef,
  getNewMessageRef,
} from '../../services';

function addMessageHandler(action) {
  const { chatId, authorUid, author, text } = action.payload;
  const newMessage = { authorUid, author, text };

  set(getNewMessageRef(chatId), newMessage);
}

function deleteMessageHandler(action) {
  const { chatId, messageId } = action.payload;

  remove(getMessageRef(chatId, messageId));
}

function deleteMessageListHandler(action) {
  const chatId = action.payload;

  remove(getMessageListRef(chatId));
}

function getAddMessageChannel(chatId) {
  return eventChannel((emitter) => {
    const unsubscribe = onChildAdded(getMessageListRef(chatId), (snapshot) => {
      emitter(snapshot);
    });
    return unsubscribe;
  });
}

function getDeleteMessageChannel(chatId) {
  return eventChannel((emitter) => {
    const unsubscribe = onChildRemoved(
      getMessageListRef(chatId),
      (snapshot) => {
        emitter(snapshot);
      }
    );
    return unsubscribe;
  });
}

function* getAddMessageSocket(chatId) {
  const addMessageSocket = yield call(getAddMessageChannel, chatId);

  try {
    while (true) {
      let newMessage = yield take(addMessageSocket);

      yield put(
        getAddMessage({
          chatId,
          messageId: newMessage.key,
          ...newMessage.val(),
        })
      );
    }
  } catch (error) {
    console.warn(error);
  } finally {
    if (yield cancelled()) {
      addMessageSocket.close();
    }
  }
}

function* getDeleteMessageSocket(chatId) {
  const deleteMessageSocket = yield call(getDeleteMessageChannel, chatId);

  try {
    while (true) {
      let deleteMessage = yield take(deleteMessageSocket);

      yield put(
        getDeleteMessage({
          chatId: deleteMessage.chatId,
          messageId: deleteMessage.key,
        })
      );
    }
  } catch (error) {
    console.warn(error);
  } finally {
    if (yield cancelled()) {
      deleteMessageSocket.close();
    }
  }
}

function* watchMessages() {
  let addMessageTask = null;
  let deleteMessageSocket = null;

  let { payload: chatId } = yield take(CHANGE_CURRENT_CHAT);

  while (true) {
    if (chatId) {
      addMessageTask = yield fork(getAddMessageSocket, chatId);
      deleteMessageSocket = yield fork(getDeleteMessageSocket, chatId);
    }

    let action = yield take([CHANGE_CURRENT_CHAT, LOGOUT]);

    yield put(getClearMessages(chatId));

    chatId = action.payload;

    yield cancel(addMessageTask);
    yield cancel(deleteMessageSocket);
  }
}

function* watchAddMessage() {
  yield takeEvery(FETCH_ADD_MESSAGE, addMessageHandler);
}

function* watchDeleteMessage() {
  yield takeEvery(FETCH_DELETE_MESSAGE, deleteMessageHandler);
}

function* watchDeleteMessageList() {
  yield takeEvery(FETCH_DELETE_CHAT, deleteMessageListHandler);
}

export {
  watchMessages,
  watchAddMessage,
  watchDeleteMessage,
  watchDeleteMessageList,
};
