import { getId } from '../../utils';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChat } from '../../store';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { StyledDialogTextField } from '.';

export function AddChatDialog({ chatList }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [chatName, setChatName] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeChatName = (e) => {
    if (error) setError(false);
    setChatName(e.target.value);
  };

  const handleClickAdd = () => {
    if (chatName === '') return setError(true);
    dispatch(addChat({ chatId: getId(chatList, 'chat'), chatName }));
    setChatName('');
    handleClose();
  };

  return (
    <>
      <Button
        variant='text'
        startIcon={<AddCommentIcon />}
        onClick={handleClickOpen}
      >
        Add Chat
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{'Add Chat'}</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter the chat name.</DialogContentText>
          <StyledDialogTextField
            value={chatName}
            onChange={handleChangeChatName}
            label='Chat Name'
            error={error}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClickAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
