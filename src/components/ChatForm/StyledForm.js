import { styled } from '@mui/system';

export const StyledForm = styled('form', {
  name: 'StyledForm',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
}));
