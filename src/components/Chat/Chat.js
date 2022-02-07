import { useOutletContext } from 'react-router-dom';
import { MessageView, Form } from '..';

export function Chat() {
  const [messageList, handleSendMessage] = useOutletContext();
  return (
    <>
      <MessageView messageList={messageList} />
      <Form onSubmit={handleSendMessage} />
    </>
  );
}
