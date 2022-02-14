import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export function ChatListItem({ item, onClick, selected }) {
  const { id, name } = item;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <ListItemButton
      component={Link}
      to={`/chats/${id}`}
      selected={selected}
      onClick={handleClick}
    >
      <ListItemText primary={name} />
    </ListItemButton>
  );
}
