import { put, takeLatest, delay } from 'redux-saga/effects';
import { addMessage, ADD_MESSAGE_WITH_REPLY_FROM_BOT } from '.';
import { AUTHOR } from '../../utils';

function* addReplyFromBot({ payload }) {
  const { chatId, author } = payload;

  yield put(addMessage(payload));

  if (author !== AUTHOR.BOT) {
    const botMessage = {
      chatId,
      author: AUTHOR.BOT,
      text: 'Zzzz...',
    };

    yield delay(2000);
    yield put(addMessage(botMessage));
  }
}

function* watchAddMessage() {
  yield takeLatest(ADD_MESSAGE_WITH_REPLY_FROM_BOT, addReplyFromBot);
}

export { watchAddMessage };
