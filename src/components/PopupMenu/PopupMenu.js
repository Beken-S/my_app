import { useCallback, useState } from 'react';
import { PopupMenuProvider } from '.';
import { PopupMenuItem } from './PopupMenuItem';
import Menu from '@mui/material/Menu';

export function PopupMenu({ children, button }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = useCallback((e) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <PopupMenuProvider value={{ open: open, handleOpen, handleClose }}>
      {button}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {children}
      </Menu>
    </PopupMenuProvider>
  );
}

PopupMenu.Item = PopupMenuItem;
