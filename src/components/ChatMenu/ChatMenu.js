import { getFetchDeleteChat } from '../../store';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { PopupMenu } from '..';
import { ChatMenuButton } from '.';

export function ChatMenu({ chatId }) {
  return (
    <PopupMenu button={<ChatMenuButton />}>
      <PopupMenu.Item
        icon={<DeleteOutlineIcon fontSize='small' />}
        text={'Delete chat'}
        actions={[{ action: getFetchDeleteChat, payload: chatId }]}
      />
    </PopupMenu>
  );
}
