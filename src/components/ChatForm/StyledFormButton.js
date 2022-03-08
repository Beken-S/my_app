import { styled } from '@mui/system';
import Button from '@mui/material/Button';

export const StyledFormButton = styled(
  (props) => (
    <Button variant='contained' fullWidth size='large' type='send' {...props} />
  ),
  {
    name: 'StyledFormButton',
    slot: 'Root',
  }
)(({ theme }) => ({
  marginTop: theme.spacing(5),
}));
