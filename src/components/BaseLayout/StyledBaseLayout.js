import { styled } from '@mui/system';

export const StyledBaseLayout = styled('div', {
  name: 'StyledBaseLayout',
  slot: 'Wrapper',
})({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr',
  gridTemplateAreas: `
    'header'
    'content'
  `,
  height: '100vh',
});
