import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';

export const StyledSendMessageFormControl = styled(
  (props) => <FormControl {...props} />,
  {
    name: 'StyledSendMessageFormControl',
    slot: 'Wrapper',
  }
)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1),
}));
