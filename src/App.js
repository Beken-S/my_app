import './App.scss';
import { useState, useEffect, useCallback } from 'react';
import { Form } from './components';
import { MessageView } from './components';

function App() {
  const [messageList, setMessageList] = useState([]);
  const handleSubmitMessage = useCallback((message) => {
    setMessageList((prevMassageList) => [message, ...prevMassageList]);
  }, []);
  useEffect(() => {
    if (messageList[0]?.author === 'Me') {
      const robotResponse = { text: 'Zzzzz....', author: 'Robot' };
      const response = setTimeout(
        () => handleSubmitMessage(robotResponse),
        1500
      );
      return () => clearTimeout(response);
    }
  }, [messageList, handleSubmitMessage]);
  return (
    <div className='App'>
      <MessageView messageList={messageList} />
      <Form onSubmit={handleSubmitMessage} />
    </div>
  );
}

export default App;
