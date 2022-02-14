import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addChat, addMessageList, selectLastChatId } from '../../store';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import AddCommentIcon from '@mui/icons-material/AddComment';

export function AddChatDialog() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [chatName, setChatName] = useState('');
  const [newChatAdded, setNewChatAdded] = useState(false);

  const lastChatId = useSelector(selectLastChatId, shallowEqual);

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
    dispatch(addChat(chatName));
    setChatName('');
    setNewChatAdded(true);
    handleClose();
  };

  useEffect(() => {
    if (newChatAdded) {
      dispatch(addMessageList(lastChatId));
      setNewChatAdded(false);
    }
  }, [newChatAdded]);

  useEffect(() => console.log('update'), [lastChatId]);

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
          <TextField
            autoFocus
            value={chatName}
            onChange={handleChangeChatName}
            margin='dense'
            label='Chat Name'
            fullWidth
            variant='standard'
            error={error}
            helperText='Incorrect entry.'
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
