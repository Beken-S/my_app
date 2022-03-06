import { styled } from '@mui/system';
import { ChatForm } from '..';

export const StyledSignUpForm = styled((props) => <ChatForm {...props} />, {
  name: 'StyledSignUpForm',
  slot: 'Root',
})(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: theme.spacing(5),
}));
