import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export function KebabMenuItem({ option, close }) {
  const { icon, text, actions } = option;
  const dispatch = useDispatch();
  const handleClick = () => {
    if (Boolean(actions)) {
      actions.forEach(({ action, payload }) => dispatch(action(payload)));
    }
    if (Boolean(close)) close();
  };

  return (
    <MenuItem onClick={handleClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {text && <ListItemText primary={text} />}
    </MenuItem>
  );
}
