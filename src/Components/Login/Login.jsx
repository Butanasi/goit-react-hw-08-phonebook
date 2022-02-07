import { useState, useEffect } from 'react';
import { useLogInUserMutation } from '../../redux/auth';
import { Box, Button, TextField } from '@mui/material';
export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [logInUser, { isError }] = useLogInUserMutation();

  useEffect(() => {
    if (isError) {
      alert('Bad Request');
    }
  }, [isError]);
  const login = e => {
    e.preventDefault();

    logInUser({ email, password });
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          mt: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onSubmit={login}
      >
        <TextField
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          sx={{ mt: '10px', width: '300px' }}
          required
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          sx={{ mt: '10px', width: '300px' }}
          required
        />
        <Button
          sx={{
            mt: '10px',
            width: '100px',
          }}
          type="submit"
        >
          Login
        </Button>
      </Box>
    </div>
  );
}
