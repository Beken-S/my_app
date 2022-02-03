import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export function ChatList({ sx = [], chatList }) {
  return (
    <List
      sx={{
        borderRight: 1,
        ...sx,
      }}
    >
      {chatList.map(({ id, name }) => (
        <ListItem key={id} button>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
}
