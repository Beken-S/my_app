import { styled } from '@mui/system';

export const StyledChatLayout = styled('div', {
  name: 'StyledChatLayout',
  slot: 'Wrapper',
})({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: '1fr',
  gridTemplateAreas: `
    'chat-list chat'
    'chat-list chat'
  `,
  height: '100%',
});
