import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export function KebabMenuButton(props) {
  return (
    <IconButton {...props}>
      <MoreVertIcon />
    </IconButton>
  );
}
