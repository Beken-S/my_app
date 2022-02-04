import { useState, useEffect, useCallback } from 'react';
import { AUTHOR } from './utils/constants';
import Box from '@mui/material/Box';
import { ChatList } from './components';
import { Form } from './components';
import { MessageView } from './components';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([
    { id: `cht-1`, name: 'chat1' },
    { id: `cht-2`, name: 'chat2' },
  ]);

  const handleSendMessage = useCallback((text, author = AUTHOR.USER) => {
    const newMessage = {
      id: `msg-${Date.now()}`,
      text: text,
      author: author,
    };
    setMessageList((prevMassageList) => [newMessage, ...prevMassageList]);
  }, []);

  useEffect(() => {
    let response;
    if (messageList[0]?.author === AUTHOR.USER) {
      response = setTimeout(
        () => handleSendMessage('Zzzzz....', AUTHOR.BOT),
        1500
      );
    }
    return () => clearTimeout(response);
  }, [messageList, handleSendMessage]);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        gridTemplateRows: '1fr min-content',
        gridTemplateAreas: `
          'chat-list message-view'
          'chat-list form'
        `,
        height: '100vh',
      }}
    >
      <ChatList sx={{ gridArea: 'chat-list' }} chatList={chatList} />
      <MessageView
        sx={{ gridArea: 'message-view' }}
        messageList={messageList}
      />
      <Form sx={{ gridArea: 'form' }} onSubmit={handleSendMessage} />
    </Box>
  );
}

export default App;
