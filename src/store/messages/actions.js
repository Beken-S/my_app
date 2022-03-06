import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  CLEAR_MESSAGES,
  FETCH_ADD_MESSAGE,
  FETCH_DELETE_MESSAGE,
} from '.';

const getAddMessage = ({ chatId, messageId, authorUid, author, text }) => {
  return {
    type: ADD_MESSAGE,
    payload: {
      chatId,
      messageId,
      authorUid,
      author,
      text,
    },
  };
};

const getDeleteMessage = ({ chatId, messageId }) => {
  return {
    type: DELETE_MESSAGE,
    payload: {
      chatId,
      messageId,
    },
  };
};

const getFetchAddMessage = ({ chatId, authorUid, author, text }) => {
  return {
    type: FETCH_ADD_MESSAGE,
    payload: { chatId, authorUid, author, text },
  };
};

const getFetchDeleteMessage = ({ chatId, messageId }) => {
  return {
    type: FETCH_DELETE_MESSAGE,
    payload: { chatId, messageId },
  };
};

const getClearMessages = (chatId) => {
  return {
    type: CLEAR_MESSAGES,
    payload: chatId,
  };
};

export {
  getAddMessage,
  getDeleteMessage,
  getFetchAddMessage,
  getFetchDeleteMessage,
  getClearMessages,
};
