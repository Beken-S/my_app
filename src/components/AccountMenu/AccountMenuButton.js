import { AccountButton } from '..';
import { usePopupMenuContext } from '..';

export function AccountMenuButton() {
  const { handleOpen } = usePopupMenuContext();

  return <AccountButton color='inherit' onClick={handleOpen} />;
}
