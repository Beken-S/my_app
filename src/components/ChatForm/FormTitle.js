import Typography from '@mui/material/Typography';

export function FormTitle({ children, ...props }) {
  return (
    <Typography component='h2' variant='h4' mb={2} {...props}>
      {children}
    </Typography>
  );
}
