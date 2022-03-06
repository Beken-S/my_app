import { useCallback, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getChangeCurrentChat, selectChats } from '../../store';
import List from '@mui/material/List';
import { ChatListItem } from '.';
import { AddChatDialog } from '..';

export function ChatList() {
  const dispatch = useDispatch();
  const chatList = useSelector(selectChats, shallowEqual);
  const [selectedChat, setSelectedChat] = useState('');

  const handleSelectChat = useCallback(
    (id) => {
      setSelectedChat(id);
      dispatch(getChangeCurrentChat(id));
    },
    [dispatch]
  );

  return (
    <List component='nav'>
      <AddChatDialog />
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
