import { styled } from '@mui/system';

export const StyledChatListArea = styled('div', {
  name: 'StyledChatListArea',
  slot: 'Wrapper',
})(({ theme }) => ({
  gridArea: 'chat-list',
  borderRight: `1px solid ${theme.palette.divider}`,
}));
