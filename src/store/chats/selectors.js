const selectChats = (state) => state.chats;

const selectChatById = (state, chatId) => {
  return state.chats.find((chat) => chat.id === chatId);
};

const selectLastChatId = (state) => {
  return state.chats.length > 0 ? state.chats[state.chats.length - 1].id : '';
};

export { selectChats, selectChatById, selectLastChatId };
