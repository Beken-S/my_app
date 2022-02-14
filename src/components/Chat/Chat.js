import { AUTHOR } from '../../utils';
import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import {
  addMessage,
  selectProfileUsername,
  selectMessagesByChatId,
} from '../../store';
import { ChatBar, MessageView, SendMessageForm } from '..';

export function Chat() {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const username = useSelector(selectProfileUsername, shallowEqual);
  const messageList = useSelector(
    (store) => selectMessagesByChatId(store, chatId),
    shallowEqual
  );

  useEffect(() => {
    let response;
    if (messageList && messageList[0]?.author === username) {
      response = setTimeout(
        () =>
          dispatch(
            addMessage({ chatId, author: AUTHOR.BOT, text: 'Zzzzz....' })
          ),
        1500
      );
    }
    return () => clearTimeout(response);
  }, [chatId, messageList]);

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
