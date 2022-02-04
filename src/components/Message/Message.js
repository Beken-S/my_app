import './styles.scss';
import { AUTHOR } from '../../utils/constants';

export function Message({ text, author }) {
  const isOutgoing = author === AUTHOR.USER;
  const receivedStyle = 'message';
  const outgoingStyle = 'message message_style_outgoing';

  return (
    <div className={isOutgoing ? outgoingStyle : receivedStyle}>{text}</div>
  );
}
