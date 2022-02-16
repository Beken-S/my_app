import { deleteChat } from '../../store';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { KebabMenu } from '..';

export function ChatMenu({ chatId }) {
  const options = [
    {
      id: 'delete-chat',
      icon: <DeleteOutlineIcon fontSize='small' />,
      text: 'Delete chat',
      actions: [{ action: deleteChat, payload: chatId }],
    },
  ];

  return <KebabMenu options={options} />;
}
