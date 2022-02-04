import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { Routs } from '../../const';

export const Navigation = () => {
  const isLoggeIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink to={Routs.HOME} exact>
          HOME
        </NavLink>
        {isLoggeIn && (
          <NavLink to={Routs.CONTACTS} exact>
            CONTACTS
          </NavLink>
        )}
      </nav>
    </div>
  );
};
