import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

export function Form({ sx = [], onSubmit }) {
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
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 1,
          py: 1,
          pl: 2,
          pr: 1,
          borderTop: 1,
          ...sx,
        }}
      >
        <TextField
          multiline
          fullWidth
          variant='standard'
          autoFocus={true}
          inputRef={inputRef}
          value={value}
          onChange={handleChange}
        />
        <Tooltip title='Send'>
          <IconButton color='primary' type='send'>
            <SendIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </form>
  );
}
