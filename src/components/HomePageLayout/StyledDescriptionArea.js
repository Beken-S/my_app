import { styled } from '@mui/system';

export const StyledDescriptionArea = styled('div', {
  name: 'StyledDescriptionArea',
  slot: 'Wrapper',
})(({ theme }) => ({
  gridArea: 'description',
  backgroundColor: theme.palette.primary.light,
}));
