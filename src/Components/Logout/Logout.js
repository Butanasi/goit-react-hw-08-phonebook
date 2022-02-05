import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import {
  authSelectors,
  // operations,
  useLogOutUserMutation,
} from '../../redux/auth';

export function Logout() {
  const [logOutUser] = useLogOutUserMutation();
  // const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <span>Hello {name}</span>
      <button
        type="button"
        onClick={() =>
          // dispatch(operations.logOut())
          logOutUser()
        }
      >
        Logout
      </button>
    </div>
  );
}
