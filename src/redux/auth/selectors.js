const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getToken = state => state.auth.token;

const getIsRefresh = state => state.auth.isRefresh;

export const authSelectors = {
  getIsRefresh,
  getIsLoggedIn,
  getUserName,
  getToken,
};
