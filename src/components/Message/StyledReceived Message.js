import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';

export const StyledReceivedMessage = styled(Paper, {
  name: 'StyledReceivedMessage',
  slot: 'Wrapper',
})(({ theme }) => ({
  flex: '0 0 auto',
  maxWidth: '450px',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  overflow: 'hidden',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,
  [theme.breakpoints.up('sm')]: {},
  '& .MuiTypography-subtitle1': {
    textTransform: 'capitalize',
  },
}));
