import { TimeoutBot, AUTHOR } from '../../utils';
import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  // ADD_MESSAGE_LIST,
  // DELETE_MESSAGE_LIST,
} from './actionTypes';

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

const addMessageWithReplyFromBot = (message) => (dispatch, getState) => {
  const { chatId, author } = message;

  dispatch(addMessage(message));

  if (author !== AUTHOR.BOT) {
    const botMessage = {
      chatId,
      author: AUTHOR.BOT,
      text: 'Zzzz...',
    };
    TimeoutBot.setup(() => dispatch(addMessage(botMessage)), 2000);
  }
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

// const addMessageList = (chatId) => {
//   return {
//     type: ADD_MESSAGE_LIST,
//     payload: chatId,
//   };
// };

// const deleteMessageList = (chatId) => {
//   return {
//     type: DELETE_MESSAGE_LIST,
//     payload: chatId,
//   };
// };

export { addMessage, deleteMessage, addMessageWithReplyFromBot };
