import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export function ChatList({ chatList }) {
  return (
    <List>
      {chatList.map(({ id, name }) => (
        <ListItem key={id} button>
          <NavLink to={`/chats/${id}`}>
            <ListItemText primary={name} />
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
}
