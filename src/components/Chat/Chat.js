import { ChatData, MessageView, Form } from '..';

export function Chat() {
  return (
    <ChatData
      render={(chatList, messageList, handleSendMessage) => {
        return (
          <>
            <MessageView messageList={messageList} />
            <Form onSubmit={handleSendMessage} />
          </>
        );
      }}
    />
  );
}
