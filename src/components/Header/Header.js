import { Link as RouterLink } from 'react-router-dom';
import { AccountMenu } from '..';
import { StyledToolbar } from '.';
import { StyledBox } from './StyledBox';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { shallowEqual, useSelector } from 'react-redux';
import { selectAuthStatus } from '../../store/auth';

export function Header() {
  const authenticated = useSelector(selectAuthStatus, shallowEqual);

  return (
    <AppBar position='static' elevation={0}>
      <StyledToolbar>
        <StyledBox>
          <Link
            component={RouterLink}
            to='/'
            variant='h5'
            underline='none'
            color='inherit'
          >
            MyChat
          </Link>
          <Button component={RouterLink} to='/gists' color='inherit'>
            Gists
          </Button>
        </StyledBox>
        {authenticated && <AccountMenu />}
      </StyledToolbar>
    </AppBar>
  );
}
