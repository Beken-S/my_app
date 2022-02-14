import { MessageBody, StyledReceivedMessage, StyledSentMessage } from '.';

export function Message({ message, username, showUsername }) {
  return message.author === username ? (
    <StyledSentMessage>
      <MessageBody message={message} showAuthor={showUsername} />
    </StyledSentMessage>
  ) : (
    <StyledReceivedMessage>
      <MessageBody message={message} />
    </StyledReceivedMessage>
  );
}
