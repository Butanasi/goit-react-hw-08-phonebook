import { useState, useEffect } from 'react';
import { useLogInUserMutation } from '../../redux/auth';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [logoutUser, setLogoutUser] = useState(true);
  const [logInUser,{data,isError,error}] = useLogInUserMutation();

  useEffect(() => {
    if (data) {
      localStorage.setItem(
        'login',
        JSON.stringify({
          userLogin: true,
          token: data.token,
        }),
      );
      console.log('data', data.user.name);
      setErrorMsg('');
      setEmail('');
      setPassword('');
      setLogoutUser(false);
    }
    if (isError) {
      setErrorMsg(error.data.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError]);

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
        <button type="submit">Login In</button>
      </form>
    </div>
  );
}
