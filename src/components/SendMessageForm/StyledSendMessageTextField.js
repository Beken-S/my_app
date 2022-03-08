import { styled } from '@mui/system';
import OutlinedInput from '@mui/material/OutlinedInput';

export const StyledSendMessageTextField = styled(
  (props) => <OutlinedInput multiline fullWidth {...props} />,
  {
    name: 'StyledSendMessageTextField',
    slot: 'Root',
  }
)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));
