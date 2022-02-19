import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useCallback } from 'react';

export function ChatListItem({ item, onClick, selected }) {
  const { id, name } = item;

  const handleClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

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
