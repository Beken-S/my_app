import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export function ChatList({ chatList, addChat, delChat }) {
  const [newChatName, setNewChatName] = useState('');

  const handleChangeNewChatName = (e) => {
    setNewChatName(e.target.value);
  };

  const handleAddChat = () => {
    if (newChatName !== '') {
      addChat(newChatName);
    }
  };

  return (
    <>
      <input value={newChatName} onChange={handleChangeNewChatName} />
      <button onClick={handleAddChat}>Add</button>
      <List>
        {chatList.map(({ id, name }) => (
          <ListItem key={id} button>
            <NavLink to={`/chats/${id}`}>
              <ListItemText primary={name} />
            </NavLink>
            <ListItemButton onClick={() => delChat(id)}>
              <DeleteIcon />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
