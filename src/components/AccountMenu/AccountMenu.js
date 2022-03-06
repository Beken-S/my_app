import { getFetchLogout } from '../../store';
import { Link } from 'react-router-dom';
import { PopupMenu } from '..';
import { AccountMenuButton } from '.';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

export function AccountMenu() {
  return (
    <PopupMenu button={<AccountMenuButton />}>
      <PopupMenu.Item
        component={Link}
        to='/profile'
        icon={<ManageAccountsIcon />}
        text={'Profile'}
      />
      <PopupMenu.Item
        icon={<LogoutIcon />}
        text={'Logout'}
        actions={[{ action: getFetchLogout }]}
      />
    </PopupMenu>
  );
}
