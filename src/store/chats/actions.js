import {
  ADD_CHAT,
  DELETE_CHAT,
  SET_CHATS,
  CHANGE_CURRENT_CHAT,
  FETCH_ADD_CHAT,
  FETCH_DELETE_CHAT,
} from '.';

const getSetChats = (chatList) => {
  return {
    type: SET_CHATS,
    payload: chatList,
  };
};

const getAddChat = ({ chatId, chatName }) => {
  return {
    type: ADD_CHAT,
    payload: {
      chatId,
      chatName,
    },
  };
};

const getDeleteChat = (chatId) => {
  return {
    type: DELETE_CHAT,
    payload: chatId,
  };
};

const getFetchAddChat = (chatName) => {
  return {
    type: FETCH_ADD_CHAT,
    payload: chatName,
  };
};

const getFetchDeleteChat = (chatId) => {
  return {
    type: FETCH_DELETE_CHAT,
    payload: chatId,
  };
};

const getChangeCurrentChat = (chatId) => {
  return {
    type: CHANGE_CURRENT_CHAT,
    payload: chatId,
  };
};

export {
  getAddChat,
  getDeleteChat,
  getSetChats,
  getFetchAddChat,
  getFetchDeleteChat,
  getChangeCurrentChat,
};
