import './styles.scss';

export function Message({ text, author }) {
  const isOutgoing = author === 'Me';
  const receivedStyle = 'message';
  const outgoingStyle = 'message message_style_outgoing';
  return (
    <div className={isOutgoing ? outgoingStyle : receivedStyle}>{text}</div>
  );
}
