import { Outlet } from 'react-router-dom';
import { ChatData, ChatLayout, ChatList } from '../components';

export function ChatsPage() {
  return (
    <ChatData
      render={(
        chatList,
        messageList,
        handleSendMessage,
        handleAddChat,
        handleDelChat
      ) => {
        return (
          <ChatLayout
            chatList={
              <ChatList
                chatList={chatList}
                addChat={handleAddChat}
                delChat={handleDelChat}
              />
            }
            chat={<Outlet context={[messageList, handleSendMessage]} />}
          />
        );
      }}
    />
  );
}
