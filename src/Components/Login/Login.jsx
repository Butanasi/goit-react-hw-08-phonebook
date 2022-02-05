import { useState } from 'react';
import { useLogInUserMutation } from '../../redux/auth';
// import { useDispatch } from 'react-redux';
// import { operations } from '../../redux/auth';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  const [logInUser] = useLogInUserMutation();
  const login = e => {
    e.preventDefault();
    // dispatch(operations.logIn({ email, password }));
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
      <form onSubmit={login}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
