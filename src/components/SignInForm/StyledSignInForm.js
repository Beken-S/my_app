import { styled } from '@mui/system';
import { ChatForm } from '..';

export const StyledSignInForm = styled((props) => <ChatForm {...props} />, {
  name: 'StyledSignInForm',
  slot: 'Root',
})(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: theme.spacing(5),
}));
