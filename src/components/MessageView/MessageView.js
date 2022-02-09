import { StyledMessageView } from './StyledMessageView';
import { Message } from '..';

export function MessageView({ messageList }) {
  return (
    <StyledMessageView>
      {messageList.map(({ id, text, author }) => (
        <Message key={id} text={text} author={author} />
      ))}
    </StyledMessageView>
  );
}
