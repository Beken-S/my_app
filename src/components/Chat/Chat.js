import { useMemo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { selectProfileUsername, selectMessagesByChatId } from '../../store';
import { ChatBar, MessageView, SendMessageForm } from '..';
import { selectUserId } from '../../store';

export default function Chat() {
  const { chatId } = useParams();
  const userId = useSelector(selectUserId, shallowEqual);
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
      <SendMessageForm userId={userId} chatId={chatId} username={username} />
    </>
  );
}
