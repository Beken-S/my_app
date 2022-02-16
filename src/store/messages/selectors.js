const selectMessages = (state) => state.messages;

const selectMessagesByChatId = (chatId) => {
  return (state) => state.messages[chatId];
};

export { selectMessages, selectMessagesByChatId };
