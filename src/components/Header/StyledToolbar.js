import { styled } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';

export const StyledToolbar = styled(Toolbar, {
  name: 'StyledToolbar',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
