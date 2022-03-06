import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFetchAddChat } from '../../store';
import { AddChatActions, AddChatButton, AddChatContent, AddChatTitle } from '.';
import { ChatDialog } from '..';

export function AddChatDialog() {
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

  const handleClose = useCallback(() => {
    setChatName('');
    setError(false);
  }, []);

  const handleAction = useCallback(() => {
    if (chatName === '') {
      setError(true);
      return false;
    }
    dispatch(getFetchAddChat(chatName));
    return true;
  }, [chatName, dispatch]);

  return (
    <ChatDialog
      action={handleAction}
      close={handleClose}
      error={error}
      button={<AddChatDialog.Button />}
    >
      <AddChatDialog.Title />
      <AddChatDialog.Content
        value={chatName}
        error={error}
        onChange={handleChangeChatName}
      />
      <AddChatDialog.Actions />
    </ChatDialog>
  );
}

AddChatDialog.Title = AddChatTitle;
AddChatDialog.Button = AddChatButton;
AddChatDialog.Content = AddChatContent;
AddChatDialog.Actions = AddChatActions;
