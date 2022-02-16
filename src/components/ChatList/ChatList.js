import { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectChats } from '../../store';
import List from '@mui/material/List';
import { ChatListItem } from '.';
import { AddChatDialog } from '..';

import Divider from '@mui/material/Divider';

export function ChatList() {
  const chatList = useSelector(selectChats, shallowEqual);
  const [selectedChat, setSelectedChat] = useState('');

  const handleSelectChat = (id) => {
    setSelectedChat(id);
  };

  return (
    <>
      <AddChatDialog chatList={chatList} />
      <Divider />
      <List>
        {chatList.map((chat) => (
          <ChatListItem
            key={chat.id}
            item={chat}
            selected={selectedChat === chat.id}
            onClick={handleSelectChat}
          />
        ))}
      </List>
    </>
  );
}
