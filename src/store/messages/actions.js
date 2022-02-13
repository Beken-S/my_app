import { ADD_MESSAGE, DELETE_MESSAGE } from './actionTypes';

const addMessage = ({ chatId, author, text }) => {
  return {
    type: ADD_MESSAGE,
    payload: {
      chatId,
      author,
      text,
    },
  };
};

const deleteMessage = ({ chatId, messageId }) => {
  return {
    type: DELETE_MESSAGE,
    payload: {
      chatId,
      messageId,
    },
  };
};

export { addMessage, deleteMessage };
