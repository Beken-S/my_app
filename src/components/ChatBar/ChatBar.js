import { shallowEqual, useSelector } from 'react-redux';
import { selectChatById } from '../../store';
import Typography from '@mui/material/Typography';
import { StyledChatBar } from './StyledChatBar';
import { ChatMenu } from '..';

export function ChatBar({ chatId }) {
  const currentChat = useSelector(
    (state) => selectChatById(state, chatId),
    shallowEqual
  );

  return (
    <StyledChatBar>
      <Typography variant='subtitle1'>{currentChat.name}</Typography>
      <ChatMenu chatId={currentChat.id} />
    </StyledChatBar>
  );
}
