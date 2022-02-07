import { useSelector } from 'react-redux';
import { authSelectors, useLogOutUserMutation } from '../../redux/auth';
import { Box, Button } from '@mui/material';
import style from './style.module.scss';

export function Logout() {
  const [logOutUser] = useLogOutUserMutation();

  const name = useSelector(authSelectors.getUserName);
  return (
    <Box sx={{ position: 'absolute', right: '20px' }}>
      <span className={style.span}>Hello {name}</span>
      <Button variant="contained" type="button" onClick={() => logOutUser()}>
        Logout
      </Button>
    </Box>
  );
}
