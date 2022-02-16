import { ADD_CHAT, DELETE_CHAT } from './actionTypes';

const addChat = ({ chatId, chatName }) => {
  return {
    type: ADD_CHAT,
    payload: {
      chatId,
      chatName,
    },
  };
};

const deleteChat = (chatId) => {
  return {
    type: DELETE_CHAT,
    payload: chatId,
  };
};

export { addChat, deleteChat };
