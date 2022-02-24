import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addMessageWithReplyFromBot } from '../../store';
import { StyledSendMessageForm } from '.';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

export function SendMessageForm({ chatId, username }) {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value !== '') {
        const message = {
          chatId,
          author: username,
          text: value,
        };
        dispatch(addMessageWithReplyFromBot(message));
        setValue('');
        inputRef.current?.focus();
      }
    },
    [chatId, username, value, dispatch]
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, [chatId]);

  return (
    <StyledSendMessageForm onSubmit={handleSubmit}>
      <TextField
        multiline
        fullWidth
        inputRef={inputRef}
        value={value}
        onChange={handleChange}
      />
      <Tooltip title='Send'>
        <IconButton type='send'>
          <SendIcon />
        </IconButton>
      </Tooltip>
    </StyledSendMessageForm>
  );
}
