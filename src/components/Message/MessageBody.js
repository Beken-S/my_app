import { StyledMessageAuthor, StyledMessageText } from '.';

export function MessageBody({ author, text, showAuthor = true }) {
  return (
    <>
      {showAuthor && <StyledMessageAuthor>{author}</StyledMessageAuthor>}
      <StyledMessageText>{text}</StyledMessageText>
    </>
  );
}
