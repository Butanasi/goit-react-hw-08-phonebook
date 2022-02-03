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
    fetchCurrentUser: builder.query({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        const response = await baseQuery({
          url: '/user/current',
        });
        return response;
      },
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useAddNewUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
} = loginApi;
