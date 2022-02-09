import { Outlet } from 'react-router-dom';
import { ChatData, ChatLayout, ChatList } from '../components';

export function ChatsPage() {
  return (
    <ChatData
      render={(chatList, messageList, handleSendMessage) => {
        return (
          <ChatLayout
            chatList={<ChatList chatList={chatList} />}
            chat={<Outlet context={[messageList, handleSendMessage]} />}
          />
        );
      }}
    />
  );
}
