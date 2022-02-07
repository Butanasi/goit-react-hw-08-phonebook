import { Box, Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { useAddNewUserMutation } from '../../redux/auth';

export function FormRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addNewUser, { isError }] = useAddNewUserMutation();

  useEffect(() => {
    if (isError) {
      alert('Bad Request');
    }
  }, [isError]);
  const register = e => {
    e.preventDefault();

    addNewUser({ name, email, password });
    setEmail('');
    setName('');
    setPassword('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        component="form"
        onSubmit={register}
      >
        <TextField
          label="Name"
          variant="standard"
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          sx={{ mt: '10px', width: '300px' }}
          required
        />

        <TextField
          label="Email"
          variant="standard"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          sx={{ mt: '10px', width: '300px' }}
          required
        />

        <TextField
          label="Password"
          variant="standard"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          sx={{ mt: '10px', width: '300px' }}
          required
        />

        <Button sx={{ mt: '10px', width: '300px' }} type="submit">
          Login In
        </Button>
      </Box>
    </>
  );
}
