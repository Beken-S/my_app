import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFetchSignUp } from '../../store/auth';
import { Link as RouterLink } from 'react-router-dom';
import { StyledSignUpForm } from '.';
import { ChatForm } from '..';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export function SignUpForm() {
  const error = false; //Заглушка (не доделал показ ошибок)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'sign-up-name':
        setName(e.target.value);
        break;
      case 'sign-up-email':
        setEmail(e.target.value);
        break;
      case 'sign-up-password':
        setPassword(e.target.value);
        break;
      default:
    }
  };

  const handleSubmit = () => {
    dispatch(getFetchSignUp({ name, email, password }));
  };

  return (
    <StyledSignUpForm onSubmit={handleSubmit}>
      <ChatForm.Title>Sign Up</ChatForm.Title>
      <Typography mb={2}>
        {'Already a member? '}
        <Link component={RouterLink} to='/sign_in'>
          Sign in
        </Link>
      </Typography>
      <ChatForm.TextField
        id='sign-up-name'
        value={name}
        onChange={handleChange}
        autoFocus
        label='Name'
        helperText={error ? 'Incorrect entry.' : 'Please enter your name'}
      />
      <ChatForm.TextField
        id='sign-up-email'
        value={email}
        onChange={handleChange}
        label='Email'
        helperText={error ? 'Incorrect entry.' : 'Please enter your email'}
      />
      <ChatForm.PasswordField
        id='sign-up-password'
        value={password}
        onChange={handleChange}
        helperText={error ? 'Incorrect entry.' : 'Please enter your password'}
      />
      <ChatForm.Button>Sign Up</ChatForm.Button>
    </StyledSignUpForm>
  );
}
