import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { Routs } from '../../const';
import { Box, Typography } from '@mui/material';
import style from './style.module.scss';
export const Navigation = () => {
  const isLoggeIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <NavLink
          className={style.link}
          activeClassName={style.aLink}
          to={Routs.HOME}
          exact
        >
          <Typography variant="h6">HOME</Typography>
        </NavLink>

        {isLoggeIn && (
          <NavLink
            className={style.link}
            activeClassName={style.aLink}
            to={Routs.CONTACTS}
            exact
          >
            <Typography variant="h6" component="span">
              CONTACTS
            </Typography>
          </NavLink>
        )}
      </Box>
    </div>
  );
};
