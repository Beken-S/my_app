import { styled } from '@mui/system';

export const StyledChatBar = styled('div', {
  name: 'StyledChatBar',
  slot: 'Wrapper',
})(({ theme }) => ({
  alignSelf: 'stretch',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  padding: `
  ${theme.spacing(1)}
  ${theme.spacing(0.5)}
  ${theme.spacing(1)}
  ${theme.spacing(2)}
  `,
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));
