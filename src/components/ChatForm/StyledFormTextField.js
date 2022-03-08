import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';

export const StyledFormTextField = styled(
  (props) => (
    <TextField margin='dense' fullWidth variant='outlined' {...props} />
  ),
  {
    name: 'StyledFormTextField',
    slot: 'Root',
  }
)(({ theme }) => ({}));
