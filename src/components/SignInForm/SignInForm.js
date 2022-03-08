import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFetchSignIn } from '../../store/auth';
import { Link as RouterLink } from 'react-router-dom';
import { StyledSignInForm } from '.';
import { ChatForm } from '..';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export function SignInForm() {
  const error = false; //Заглушка (не доделал показ ошибок)
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'sign-in-email':
        setEmail(e.target.value);
        break;
      case 'sign-in-password':
        setPassword(e.target.value);
        break;
      default:
    }
  };

  const handleSubmit = () => {
    dispatch(getFetchSignIn({ email, password }));
  };

  return (
    <StyledSignInForm onSubmit={handleSubmit}>
      <ChatForm.Title>Sign In</ChatForm.Title>
      <Typography mb={2}>
        {'Have not an account yet? '}
        <Link component={RouterLink} to='/'>
          Sign up
        </Link>
      </Typography>
      <ChatForm.TextField
        id='sign-in-email'
        value={email}
        onChange={handleChange}
        label='Email'
        helperText={error ? 'Incorrect entry.' : 'Please enter your email'}
      />
      <ChatForm.PasswordField
        id='sign-in-password'
        value={password}
        onChange={handleChange}
        helperText={error ? 'Incorrect entry.' : 'Please enter your password'}
      />
      <ChatForm.Button>Sign In</ChatForm.Button>
    </StyledSignInForm>
  );
}
