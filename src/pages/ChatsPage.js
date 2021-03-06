import { Outlet } from 'react-router-dom';
import { ChatLayout, ChatList } from '../components';

export default function ChatsPage() {
  return <ChatLayout chatList={<ChatList />} chat={<Outlet />} />;
}
