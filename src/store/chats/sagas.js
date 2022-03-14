import { eventChannel } from 'redux-saga';
import {
  call,
  cancelled,
  fork,
  put,
  take,
  takeEvery,
} from 'redux-saga/effects';
import {
  get,
  onChildAdded,
  onChildRemoved,
  remove,
  set,
} from 'firebase/database';
import {
  FETCH_ADD_CHAT,
  FETCH_DELETE_CHAT,
  getAddChat,
  getDeleteChat,
  getSetChats,
} from '.';
import { chatsRef, getChatRef, getNewChatRef } from '../../services';

function* getChats() {
  const snapshot = yield get(chatsRef);

  if (snapshot.exists()) {
    const chatList = [];

    snapshot.forEach((childSnapshot) => {
      chatList.push({ id: childSnapshot.key, name: childSnapshot.val() });
    });

    yield put(getSetChats(chatList));
  }
}

function addChatHandler(action) {
  const chatName = action.payload;

  set(getNewChatRef(), chatName);
}

function deleteChatHandler(action) {
  const chatId = action.payload;

  remove(getChatRef(chatId));
}

function* watchAddChat() {
  yield takeEvery(FETCH_ADD_CHAT, addChatHandler);
}

function* watchDeleteChat() {
  yield takeEvery(FETCH_DELETE_CHAT, deleteChatHandler);
}

function getAddChatChannel() {
  return eventChannel((emitter) => {
    const unsubscribe = onChildAdded(chatsRef, (snapshot) => {
      emitter(snapshot);
    });
    return unsubscribe;
  });
}

function getDeleteChatChannel() {
  return eventChannel((emitter) => {
    const unsubscribe = onChildRemoved(chatsRef, (snapshot) => {
      emitter(snapshot);
    });
    return unsubscribe;
  });
}

function* getAddChatSocket() {
  const addChatChannel = yield call(getAddChatChannel);

  try {
    while (true) {
      let newChat = yield take(addChatChannel);

      yield put(getAddChat({ chatId: newChat.key, chatName: newChat.val() }));
    }
  } catch (error) {
    console.warn(error);
  } finally {
    if (yield cancelled()) {
      addChatChannel.close();
    }
  }
}

function* getDeleteChatSocket() {
  const deleteChatChannel = yield call(getDeleteChatChannel);

  try {
    while (true) {
      let deletedChat = yield take(deleteChatChannel);

      yield put(getDeleteChat(deletedChat.key));
    }
  } catch (error) {
    console.warn(error);
  } finally {
    if (yield cancelled()) {
      deleteChatChannel.close();
    }
  }
}

function* watchChats() {
  yield fork(getAddChatSocket);
  yield fork(getDeleteChatSocket);
}

export { getChats, watchChats, watchAddChat, watchDeleteChat };
