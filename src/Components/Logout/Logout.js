import { useLogOutUserMutation } from '../../redux/auth';

export function Logout() {
  const [logoutUser] = useLogOutUserMutation();

  return (
    <div>
      <button type="button" onClick={() => logoutUser()}>
        Logout
      </button>
    </div>
  );
}
