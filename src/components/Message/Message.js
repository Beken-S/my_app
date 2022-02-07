import { AUTHOR } from '../../utils/constants';
import {
  StyledMessageAuthor,
  StyledMessageText,
  StyledReceivedMessage,
  StyledSentMessage,
} from '.';

export function Message({ text, author }) {
  return author === AUTHOR.USER ? (
    <StyledSentMessage elevation={3}>
      <StyledMessageText variant='body2'>{text}</StyledMessageText>
    </StyledSentMessage>
  ) : (
    <StyledReceivedMessage elevation={3}>
      <StyledMessageAuthor variant='subtitle1'>{author}</StyledMessageAuthor>
      <StyledMessageText variant='body2'>{text}</StyledMessageText>
    </StyledReceivedMessage>
  );
}
