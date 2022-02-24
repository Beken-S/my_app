import { useMemo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { selectProfileUsername, selectMessagesByChatId } from '../../store';
import { ChatBar, MessageView, SendMessageForm } from '..';

export function Chat() {
  const { chatId } = useParams();
  const username = useSelector(selectProfileUsername, shallowEqual);
  const getSelectMessages = useMemo(
    () => selectMessagesByChatId(chatId),
    [chatId]
  );
  const messageList = useSelector(getSelectMessages);

  if (!messageList) {
    return <Navigate to='/chats' replace />;
  }

  return (
    <>
      <ChatBar chatId={chatId} />
      <MessageView username={username} messageList={messageList} />
      <SendMessageForm chatId={chatId} username={username} />
    </>
  );
}
