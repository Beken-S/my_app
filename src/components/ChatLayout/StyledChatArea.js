import { styled, alpha } from '@mui/system';
import backgroundPattern from './endless-clouds.svg';

export const StyledChatArea = styled('div', {
  name: 'StyledChatArea',
  slot: 'Wrapper',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gridArea: 'chat',
  overflowY: 'auto',
  background: `
    url(${backgroundPattern}),
    linear-gradient(
      ${alpha(theme.palette.primary.main, 0.7)},
      ${alpha(theme.palette.secondary.main, 0.1)}
    );
  `,
}));
