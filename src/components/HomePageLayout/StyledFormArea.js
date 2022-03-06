import { styled } from '@mui/system';

export const StyledFormArea = styled('div', {
  name: 'StyledFormArea',
  slot: 'Wrapper',
})(({ theme }) => ({
  gridArea: 'form',
}));
