import './styles.scss';
import { Message } from '../Message';

export function MessageView({ messageList }) {
  return (
    <div className='massage-view'>
      {messageList.map(({ text, author }) => (
        <Message text={text} author={author} />
      ))}
    </div>
  );
}
