import { getId } from '../../utils';
import { ADD_MESSAGE, DELETE_MESSAGE } from './actionTypes';

const initialState = {};

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const { chatId, author, text } = action.payload;
      const prevMessageList = state[chatId] ?? [];
      const newMessage = {
        id: getId('msg', prevMessageList, true),
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
    default: {
      return state;
    }
  }
}
