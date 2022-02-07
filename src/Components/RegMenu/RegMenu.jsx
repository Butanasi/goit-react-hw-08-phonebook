import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { Routs } from '../../const';
import style from './style.module.scss';
export function RegMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        marginLeft: '320px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <NavLink
        className={style.link}
        activeClassName={style.aLink}
        to={Routs.REGISTER}
      >
        <Typography variant="h6">REGISTER</Typography>
      </NavLink>

      <NavLink
        className={style.link}
        activeClassName={style.aLink}
        to={Routs.LOGIN}
      >
        <Typography variant="h6">LOGIN</Typography>
      </NavLink>
    </Box>
  );
}
