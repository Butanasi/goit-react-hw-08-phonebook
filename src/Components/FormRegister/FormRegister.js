import { useState } from 'react';
import { useAddNewUserMutation } from '../../redux/auth';

export function FormRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addNewUser] = useAddNewUserMutation();

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
    <div>
      <form onSubmit={register}>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} value={name} />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <button type="submit">Login In</button>
      </form>
    </div>
  );
}
