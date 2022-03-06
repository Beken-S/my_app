import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const StyledBox = styled(Box, {
  name: 'StyledBox',
  slot: 'Wrapper',
})(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));
