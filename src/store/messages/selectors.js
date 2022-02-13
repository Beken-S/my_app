const selectMessages = (state) => state.messages;

const selectMessagesByChatId = (state, chatId) => state.messages[chatId];

export { selectMessages, selectMessagesByChatId };
