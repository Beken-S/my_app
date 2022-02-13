import { getId } from '../../utils';
import { ADD_CHAT, DELETE_CHAT } from './actionTypes';

const initialState = [];

export function chatsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAT: {
      return [
        ...state,
        {
          id: getId('chat', state),
          name: action.payload,
        },
      ];
    }
    case DELETE_CHAT: {
      const [...newChatList] = state;
      const indexDeletedChat = newChatList.findIndex(
        (chat) => chat.id === action.payload
      );

      if (indexDeletedChat < 0) return state;

      newChatList.splice(indexDeletedChat, 1);
      return newChatList;
    }
    default: {
      return state;
    }
  }
}
