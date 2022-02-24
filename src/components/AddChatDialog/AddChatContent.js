import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { StyledDialogTextField } from '.';

export function AddChatContent({ value, error, onChange }) {
  return (
    <DialogContent>
      <DialogContentText>Enter the chat name.</DialogContentText>
      <StyledDialogTextField
        value={value}
        onChange={onChange}
        label='Chat Name'
        error={error}
      />
    </DialogContent>
  );
}
