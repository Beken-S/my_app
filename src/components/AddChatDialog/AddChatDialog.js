import { getId } from '../../utils';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChat } from '../../store';
import { AddChatActions, AddChatButton, AddChatContent } from '.';
import { ChatDialog } from '..';

export function AddChatDialog({ chatList }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [chatName, setChatName] = useState('');

  const handleChangeChatName = useCallback(
    (e) => {
      if (error) setError(false);
      setChatName(e.target.value);
    },
    [error]
  );

  const handleAction = useCallback(() => {
    if (chatName === '') {
      setError(true);
      return false;
    }
    dispatch(addChat({ chatId: getId(chatList, 'chat'), chatName }));
    setChatName('');
    return true;
  }, [chatList, chatName, dispatch]);

  return (
    <ChatDialog
      action={handleAction}
      error={error}
      button={<AddChatDialog.Button />}
    >
      <AddChatDialog.Content
        value={chatName}
        error={error}
        onChange={handleChangeChatName}
      />
      <AddChatDialog.Actions />
    </ChatDialog>
  );
}

AddChatDialog.Button = AddChatButton;
AddChatDialog.Content = AddChatContent;
AddChatDialog.Actions = AddChatActions;
