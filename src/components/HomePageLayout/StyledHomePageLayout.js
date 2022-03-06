import { styled } from '@mui/system';

export const StyledHomePageLayout = styled('div', {
  name: 'StyledHomePageLayout',
  slot: 'Wrapper',
})({
  display: 'grid',
  gridTemplateColumns: '1fr minmax(200px, 600px)',
  gridTemplateRows: '1fr',
  gridTemplateAreas: `
    'description form'
  `,
  height: '100%',
});
