import { ADD_CHAT, DELETE_CHAT } from './actionTypes';

const addChat = (chatName) => {
  return {
    type: ADD_CHAT,
    payload: chatName,
  };
};

const deleteChat = (chatId) => {
  return {
    type: DELETE_CHAT,
    payload: chatId,
  };
};

export { addChat, deleteChat };
