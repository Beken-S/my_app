import { styled } from '@mui/system';
import ListItemButton from '@mui/material/ListItemButton';

export const StyledListItemButton = styled(
  (props) => <ListItemButton {...props} />,
  {
    name: 'StyledListItemButton',
    slot: 'Wrapper',
  }
)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
