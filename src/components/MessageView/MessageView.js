import Box from '@mui/material/Box';
import { Message } from '../Message';

export function MessageView({ sx = [], messageList }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column-reverse',
        gap: 2,
        p: 2,
        backgroundColor: '#cccccc',
        overflowY: 'auto',
        ...sx,
      }}
    >
      {messageList.map(({ id, text, author }) => (
        <Message key={id} text={text} author={author} />
      ))}
    </Box>
  );
}
