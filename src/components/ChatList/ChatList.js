import { useCallback, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectChats } from '../../store';
import List from '@mui/material/List';
import { ChatListItem } from '.';
import { AddChatDialog } from '..';

export function ChatList() {
  const chatList = useSelector(selectChats, shallowEqual);
  const [selectedChat, setSelectedChat] = useState('');

  const handleSelectChat = useCallback((id) => {
    setSelectedChat(id);
  }, []);

  return (
    <List component='nav'>
      <AddChatDialog chatList={chatList} />
      {chatList.map((chat) => (
        <ChatListItem
          key={chat.id}
          item={chat}
          selected={selectedChat === chat.id}
          onClick={handleSelectChat}
        />
      ))}
    </List>
  );
}
