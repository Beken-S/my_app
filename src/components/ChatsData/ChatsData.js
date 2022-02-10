import { useState, useEffect, useCallback } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { AUTHOR } from '../../utils/constants';

export function ChatData({ render }) {
  const navigate = useNavigate();
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

  const handleAddChat = useCallback(
    (name) => {
      const lastChatId =
        chatList.length > 0 ? chatList[chatList.length - 1].id : 'chat0';
      const newChatId = `chat${Number(lastChatId.substr(4)) + 1}`;
      const newChat = {
        id: newChatId,
        name,
      };
      setChatList((prevCatList) => [...prevCatList, newChat]);
      setMessageList((prevMassageList) => ({
        ...prevMassageList,
        [newChatId]: [],
      }));
    },
    [chatList]
  );

  const handleDelChat = useCallback(
    (id) => {
      setChatList((prevCatList) => {
        const newChatList = [...prevCatList];
        const index = newChatList.findIndex((chat) => chat.id === id);
        newChatList.splice(index, 1);
        return newChatList;
      });
      setMessageList((prevMassageList) => {
        const { id, ...newMessageList } = prevMassageList;
        return newMessageList;
      });
      if (chatId === id) {
        navigate('/chats', { replace: true });
      }
    },
    [chatId, navigate]
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

  return render(
    chatList,
    messageList[chatId],
    handleSendMessage,
    handleAddChat,
    handleDelChat
  );
}
