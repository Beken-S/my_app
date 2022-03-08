import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function AccountButton(props) {
  return (
    <IconButton {...props}>
      <AccountCircleIcon fontSize={'large'} />
    </IconButton>
  );
}
