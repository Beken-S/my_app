import { useDispatch } from 'react-redux';
import { usePopupMenuContext } from '.';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export function PopupMenuItem({ icon, text, actions, component, to }) {
  const { handleClose } = usePopupMenuContext();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (Boolean(actions)) {
      actions.forEach(({ action, payload }) => dispatch(action(payload)));
    }
    handleClose();
  };

  return (
    <MenuItem component={component} to={to} onClick={handleClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {text && <ListItemText primary={text} />}
    </MenuItem>
  );
}
