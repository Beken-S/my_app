import { styled } from '@mui/system';

export const StyledSendMessageForm = styled('form', {
  name: 'StyledSendMessageForm',
  slot: 'Wrapper',
})(({ theme }) => ({
  alignSelf: 'stretch',
  display: 'flex',
  alignItems: 'flex-end',
  gap: theme.spacing(1),
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  '& .MuiIconButton-root': {
    transition: 'color 0.2s',
  },
  '&:focus-within .MuiIconButton-root': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiOutlinedInput-root': {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },
}));
