import { useDialogContext } from '..';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { StyledListItemButton } from '.';

export function AddChatButton() {
  const { handleOpen } = useDialogContext();

  return (
    <StyledListItemButton onClick={handleOpen} divider={true}>
      <ListItemIcon>
        <AddCommentIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary={'Add Chat'} />
    </StyledListItemButton>
  );
}
