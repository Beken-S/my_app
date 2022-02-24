import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { useDialogContext } from '..';

export function AddChatActions() {
  const { handleClose, handleAction } = useDialogContext();

  return (
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleAction}>Add</Button>
    </DialogActions>
  );
}
