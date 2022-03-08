import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';

export const StyledDialogTextField = styled(
  (props) => (
    <TextField
      autoFocus
      margin='dense'
      fullWidth
      variant='standard'
      {...props}
    />
  ),
  {
    name: 'StyledDialogTextField',
    slot: 'Root',
  }
)(({ theme }) => ({}));
