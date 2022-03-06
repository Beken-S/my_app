import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from '.';

const initialState = [];

export function chatsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHATS: {
      return [...action.payload];
    }
    case ADD_CHAT: {
      const { chatId, chatName } = action.payload;

      return [
        ...state,
        {
          id: chatId,
          name: chatName,
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
