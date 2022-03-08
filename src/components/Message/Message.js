import { MessageBody, StyledReceivedMessage, StyledSentMessage } from '.';

export function Message({ message, userId, username, showUsername }) {
  const { authorUid, author, text } = message;

  return authorUid === userId ? (
    <StyledSentMessage>
      <MessageBody author={username} text={text} showAuthor={showUsername} />
    </StyledSentMessage>
  ) : (
    <StyledReceivedMessage>
      <MessageBody author={author} text={text} />
    </StyledReceivedMessage>
  );
}
