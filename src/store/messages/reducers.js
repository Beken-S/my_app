import { getId } from '../../utils';
import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  // ADD_MESSAGE_LIST,
  // DELETE_MESSAGE_LIST,
} from './actionTypes';
import { ADD_CHAT, DELETE_CHAT } from '../chats/actionTypes';

const initialState = {};

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const { chatId, author, text } = action.payload;

      if (!state[chatId]) return state;

      const prevMessageList = state[chatId];
      const newMessage = {
        id: getId(prevMessageList, 'msg', true),
        author,
        text,
      };
      return {
        ...state,
        [chatId]: [newMessage, ...prevMessageList],
      };
    }
    case DELETE_MESSAGE: {
      const { chatId, messageId } = action.payload;

      if (!state.hasOwnProperty(chatId)) return state;

      const [...newMessageList] = state[chatId];
      const indexDeletedMessage = newMessageList.findIndex(
        (message) => message.id === messageId
      );

      if (indexDeletedMessage < 0) return state;

      newMessageList.splice(indexDeletedMessage, 1);
      return {
        ...state,
        [chatId]: newMessageList,
      };
    }
    case ADD_CHAT: {
      const { chatId } = action.payload;

      if (state.hasOwnProperty(chatId)) return state;

      return {
        ...state,
        [chatId]: [],
      };
    }
    case DELETE_CHAT: {
      const chatId = action.payload;

      if (!state.hasOwnProperty(chatId)) return state;

      const { ...newState } = state;
      delete newState[chatId];
      return newState;
    }
    default: {
      return state;
    }
  }
}
