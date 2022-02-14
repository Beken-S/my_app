import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

export const StyledMessageAuthor = styled(
  (props) => <Typography variant='subtitle1' noWrap={true} {...props} />,
  {
    name: 'StyledMessageAuthor',
    slot: 'Wrapper',
  }
)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiTypography-subtitle1': {
    textTransform: 'capitalize',
  },
}));
