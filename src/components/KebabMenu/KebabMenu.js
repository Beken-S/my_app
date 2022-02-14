import { useState } from 'react';
import Menu from '@mui/material/Menu';
import { KebabMenuButton, KebabMenuItem } from '.';

export function KebabMenu({ options }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <KebabMenuButton onClick={handleClick} />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option) => (
          <KebabMenuItem key={option.id} option={option} close={handleClose} />
        ))}
      </Menu>
    </>
  );
}
