import { styled, alpha } from '@mui/system';
import Typography from '@mui/material/Typography';

export const StyledPleaseSelectChat = styled(
  (props) => <Typography {...props} />,
  {
    name: 'StyledPleaseSelectChat',
    slot: 'Root',
  }
)(({ theme }) => ({
  padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
  backgroundColor: alpha('#000', 0.4),
  borderRadius: theme.spacing(2),
  color: theme.palette.primary.contrastText,
}));
