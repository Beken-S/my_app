import { useFormControl } from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';

export function SendMessageButton() {
  const { focused } = useFormControl();

  return (
    <Tooltip title='Send'>
      <IconButton color={focused ? 'primary' : 'default'} type='send'>
        <SendIcon />
      </IconButton>
    </Tooltip>
  );
}
