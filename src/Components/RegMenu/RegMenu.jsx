import { NavLink } from 'react-router-dom';
import { Routs } from '../../const';

export function RegMenu() {
  return (
    <div>
      <NavLink to={Routs.REGISTER}>REGISTER</NavLink>

      <NavLink to={Routs.LOGIN}>LOGIN</NavLink>
    </div>
  );
}
