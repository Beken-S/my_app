import { useState, useEffect, useCallback } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { AUTHOR } from '../../utils/constants';

export function ChatData({ render }) {
  const { chatId } = useParams();

  const [messageList, setMessageList] = useState({
    chat1: [],
    chat2: [],
  });
  const [chatList, setChatList] = useState([
    { id: `chat1`, name: 'Chat 1' },
    { id: `chat2`, name: 'Chat 2' },
  ]);

  const handleSendMessage = useCallback(
    (text, author = AUTHOR.USER) => {
      const newMessage = {
        id: `msg-${Date.now()}`,
        text: text,
        author: author,
      };
      setMessageList((prevMassageList) => ({
        ...prevMassageList,
        [chatId]: [newMessage, ...prevMassageList[chatId]],
      }));
    },
    [chatId]
  );

  useEffect(() => {
    let response;
    if (messageList[chatId] && messageList[chatId][0]?.author === AUTHOR.USER) {
      response = setTimeout(
        () => handleSendMessage('Zzzzz....', AUTHOR.BOT),
        1500
      );
    }
    return () => clearTimeout(response);
  }, [chatId, messageList, handleSendMessage]);

  if (chatId && !messageList[chatId]) {
    return <Navigate to='/chats' replace />;
  }

  return render(chatList, messageList[chatId], handleSendMessage);
}
