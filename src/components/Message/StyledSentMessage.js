import { styled, lighten } from '@mui/system';
import Paper from '@mui/material/Paper';

export const StyledSentMessage = styled(Paper, {
  name: 'StyledSentMessage',
  slot: 'Wrapper',
})(({ theme }) => ({
  flex: '0 0 auto',
  width: '100%',
  maxWidth: '450px',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  overflow: 'hidden',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,
  backgroundColor: lighten(theme.palette.secondary.main, 0.95),
  [theme.breakpoints.up('sm')]: {
    alignSelf: 'flex-end',
  },
  [theme.breakpoints.up('md')]: {
    alignSelf: 'flex-start',
  },
  '& .MuiTypography-subtitle1': {
    textTransform: 'capitalize',
  },
}));
