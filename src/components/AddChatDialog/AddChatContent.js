import DialogContent from '@mui/material/DialogContent';
import { StyledDialogTextField } from '.';

export function AddChatContent({ value, error, onChange }) {
  return (
    <DialogContent>
      <StyledDialogTextField
        value={value}
        onChange={onChange}
        label='Chat Name'
        error={error}
        helperText={error ? 'Incorrect entry.' : 'Please enter a chat name.'}
      />
    </DialogContent>
  );
}
