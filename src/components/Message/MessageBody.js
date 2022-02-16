import { StyledMessageAuthor, StyledMessageText } from '.';

export function MessageBody({ message: { author, text }, showAuthor = true }) {
  return (
    <>
      {showAuthor && <StyledMessageAuthor>{author}</StyledMessageAuthor>}
      <StyledMessageText>{text}</StyledMessageText>
    </>
  );
}
