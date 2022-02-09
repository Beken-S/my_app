import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

export const StyledMessageText = styled(Typography, {
  name: 'StyledMessageText',
  slot: 'Wrapper',
})(({ theme }) => ({
  margin: 0,
  whiteSpace: 'pre-wrap',
}));
