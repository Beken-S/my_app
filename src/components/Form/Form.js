import { useState, useRef } from 'react';
import { StyledForm } from './StyledForm';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

export function Form({ onSubmit }) {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '') {
      onSubmit(value);
      setValue('');
      inputRef.current?.focus();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        multiline
        fullWidth
        autoFocus={true}
        inputRef={inputRef}
        value={value}
        onChange={handleChange}
      />
      <Tooltip title='Send'>
        <IconButton type='send'>
          <SendIcon />
        </IconButton>
      </Tooltip>
    </StyledForm>
  );
}
