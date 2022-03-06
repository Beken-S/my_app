import { styled } from '@mui/system';
import { ChatForm } from '..';

const StyledSendMessageForm = styled((props) => <ChatForm {...props} />, {
  name: 'StyledSendMessageForm',
  slot: 'Wrapper',
})(({ theme }) => ({
  alignSelf: 'stretch',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export { StyledSendMessageForm };
