import { createSlice } from '@reduxjs/toolkit';
// import { operations } from './operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [operations.register.fulfilled](state, { payload }) {
//       state.user = payload.user;
//       state.token = null;
//       state.isLoggedIn = true;
//     },
//     [operations.logIn.fulfilled](state, { payload }) {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//     },
//     [operations.logOut.fulfilled](state, { payload }) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [operations.fetchCurrentUser.pending](state) {
//       state.isFetchingCurrentUser = true;
//     },
//     [operations.fetchCurrentUser.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.isLoggedIn = true;
//     },
//     [operations.fetchCurrentUser.rejected](state) {
//       state.isFetchingCurrentUser = false;
//     },
//   },
// });

// export default authSlice.reducer;

import { loginApi } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      loginApi.endpoints.addNewUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      },
    );
    builder.addMatcher(
      loginApi.endpoints.logInUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      },
    );
    builder.addMatcher(
      loginApi.endpoints.logOutUser.matchFulfilled,
      (state, _) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = false;
      },
    );
    builder.addMatcher(
      loginApi.endpoints.tokenRefresh.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      },
    );
  },
});
