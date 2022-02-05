import { Navigation } from '../Navigation';
import { RegMenu } from '../RegMenu';
import { Logout } from '../Logout';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { AppBar, Toolbar } from '@mui/material';
export function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <>
          <Navigation />
          {isLoggedIn ? <Logout /> : <RegMenu />}
        </>
      </Toolbar>
    </AppBar>
  );
}
