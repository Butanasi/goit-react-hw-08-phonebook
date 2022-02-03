import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['CONTACT'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['CONTACT'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: newContact.name,
          number: newContact.number,
        },
      }),
      invalidatesTags: ['CONTACT'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `./contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['CONTACT'],
    }),
    updayContact: builder.mutation({
      query: ({ updayContact, contactId }) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: updayContact,
      }),
      invalidatesTags: ['CONTACT'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useUpdayContactMutation,
} = contactApi;
