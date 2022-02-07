import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const StyledMessageView = styled(Box, {
  name: 'StyledMessageView',
  slot: 'Wrapper',
})(({ theme }) => ({
  flex: '1 1 auto',
  alignSelf: 'stretch',
  display: 'flex',
  flexDirection: 'column-reverse',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(2),
  paddingRight: theme.spacing(8),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  overflowY: 'auto',
}));
