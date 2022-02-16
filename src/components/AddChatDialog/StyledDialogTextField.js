import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';

export const StyledDialogTextField = styled(
  (props) => (
    <TextField
      autoFocus
      margin='dense'
      fullWidth
      variant='standard'
      helperText='Incorrect entry.'
      {...props}
    />
  ),
  {
    name: 'StyledDialogTextField',
    slot: 'Root',
  }
)(({ theme }) => ({}));
