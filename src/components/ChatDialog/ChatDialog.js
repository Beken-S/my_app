import { useCallback, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogProvider } from '.';

export function ChatDialog({ children, action, close, button }) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    close && close();
    setOpen(false);
  }, [close]);

  const handleAction = useCallback(() => {
    const success = action();
    if (success) handleClose();
  }, [action, handleClose]);

  return (
    <DialogProvider
      value={{ open: open, handleOpen, handleClose, handleAction }}
    >
      {button}
      <Dialog open={open} onClose={handleClose}>
        {children}
      </Dialog>
    </DialogProvider>
  );
}
