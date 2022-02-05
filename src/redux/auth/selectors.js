const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
const getToken = state => state.auth.token;

export const authSelectors = {
  getIsFetchingCurrent,
  getIsLoggedIn,
  getUserName,
  getToken,
};
