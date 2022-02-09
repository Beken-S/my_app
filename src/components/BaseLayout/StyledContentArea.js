import { styled } from '@mui/system';

export const StyledContentArea = styled('div', {
  name: 'StyledContentArea',
  slot: 'Wrapper',
})({
  gridArea: 'content',
  overflow: 'auto',
});
