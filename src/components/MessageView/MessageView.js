import { useSelector, shallowEqual } from 'react-redux';
import { selectProfileShowUsername } from '../../store';
import { selectUserId } from '../../store';
import { StyledMessageView } from './StyledMessageView';
import { Message } from '../Message';

export function MessageView({ username, messageList = [] }) {
  const userId = useSelector(selectUserId, shallowEqual);
  const showUsername = useSelector(selectProfileShowUsername, shallowEqual);

  return (
    <StyledMessageView>
      {messageList &&
        messageList.map((message) => (
          <Message
            key={message.id}
            message={message}
            userId={userId}
            username={username}
            showUsername={showUsername}
          />
        ))}
    </StyledMessageView>
  );
}
