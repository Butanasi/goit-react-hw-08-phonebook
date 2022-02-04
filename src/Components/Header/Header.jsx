import { Navigation } from '../Navigation';
import { RegMenu } from '../RegMenu';
import { Logout } from '../Logout';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { useFetchCurrentUserQuery } from '../../redux/auth/operations';
import { Loader } from '../Loader';

export function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const token = useSelector(authSelectors.getToken);
  const { isLoading } = useFetchCurrentUserQuery(token, {
    skip: token === null || isLoggedIn,
  });

  return isLoading ? (
    <Loader />
  ) : (
    <header>
      <Navigation />
      {!isLoggedIn ? <RegMenu /> : <Logout />}
    </header>
  );
}
