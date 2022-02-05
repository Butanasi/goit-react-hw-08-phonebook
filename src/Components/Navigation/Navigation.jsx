import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { Routs } from '../../const';
import { Typography } from '@mui/material';

export const Navigation = () => {
  const isLoggeIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink to={Routs.HOME} exact>
          <Typography variant="h6">HOME</Typography>
        </NavLink>

        {isLoggeIn && (
          <NavLink to={Routs.CONTACTS} exact>
            <Typography variant="h6" component="span">
              CONTACTS
            </Typography>
          </NavLink>
        )}
      </nav>
    </div>
  );
};
