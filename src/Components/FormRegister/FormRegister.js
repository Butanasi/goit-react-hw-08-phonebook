import { Container, TextField } from '@mui/material';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { operations, useAddNewUserMutation } from '../../redux/auth';

export function FormRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addNewUser] = useAddNewUserMutation();
  // const dispatch = useDispatch();

  const register = e => {
    e.preventDefault();
    // dispatch(operations.register({ name, email, password }));
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
    <Container>
      <form onSubmit={register}>
        <TextField
          label="Name"
          variant="standard"
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          sx={{ mt: '10px' }}
        />

        <TextField
          label="Email"
          variant="standard"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          sx={{ mt: '10px' }}
        />

        <TextField
          label="Password"
          variant="standard"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          sx={{ mt: '10px' }}
        />

        <button type="submit">Login In</button>
      </form>
    </Container>
  );
}
