import { KebabMenuButton } from '..';
import { usePopupMenuContext } from '..';

export function ChatMenuButton() {
  const { handleOpen } = usePopupMenuContext();

  return <KebabMenuButton onClick={handleOpen} />;
}
