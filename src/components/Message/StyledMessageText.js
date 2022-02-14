import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

export const StyledMessageText = styled(
  (props) => <Typography variant='body2' noWrap={true} {...props} />,
  {
    name: 'StyledMessageText',
    slot: 'Wrapper',
  }
)(({ theme }) => ({
  margin: 0,
  whiteSpace: 'pre-wrap',
}));
