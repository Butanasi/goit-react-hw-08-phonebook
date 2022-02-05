// import axios from 'axios';

// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer  ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// const register = createAsyncThunk('auth/register', async credentials => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     alert(error.message);
//   }
// });

// const logIn = createAsyncThunk('auth/login', async credentials => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     alert(error.message);
//   }
// });

// const logOut = createAsyncThunk('auth/logout', async () => {
//   try {
//     await axios.post('/users/logout');
//     token.unset();
//   } catch (error) {
//     alert(error.message);
//   }
// });

// const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue();
//     }
//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       alert(error.message);
//     }
//   },
// );

// const operations = {
//   register,
//   logIn,
//   log
// }

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ['Auth'],
  endpoints: builder => ({
    addNewUser: builder.mutation({
      queryFn: async (newUser, queryApi, extraOptions, baseQuery) => {
        const response = await baseQuery({
          url: '/users/signup',
          method: 'POST',
          body: newUser,
        });
        return response;
      },
      invalidatesTags: ['Auth'],
    }),

    logInUser: builder.mutation({
      queryFn: async (userData, queryApi, extraOptions, baseQuery) => {
        const response = await baseQuery({
          url: `/users/login`,
          method: 'POST',
          body: userData,
        });
        return response;
      },
      invalidatesTags: ['Auth'],
    }),
    logOutUser: builder.mutation({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        const response = await baseQuery({
          url: '/users/logout',
          method: 'POST',
        });
        return response;
      },
      invalidatesTags: ['Auth'],
    }),
    tokenRefresh: builder.query({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        const response = await fetch('/user/current');
        return response.ok
          ? { data: await response.json() }
          : { error: await response.json() };
      },
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useAddNewUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useTokenRefreshQuery,
} = loginApi;
