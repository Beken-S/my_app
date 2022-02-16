import { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectChatById } from '../../store';
import Typography from '@mui/material/Typography';
import { StyledChatBar } from './StyledChatBar';
import { ChatMenu } from '..';

export function ChatBar({ chatId }) {
  const getChatById = useMemo(() => selectChatById(chatId), [chatId]);
  const currentChat = useSelector(getChatById, shallowEqual);

  return (
    <StyledChatBar>
      {currentChat && (
        <>
          <Typography variant='subtitle1'>{currentChat.name}</Typography>
          <ChatMenu chatId={currentChat.id} />
        </>
      )}
    </StyledChatBar>
  );
}
