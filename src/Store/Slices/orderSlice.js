import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005/api';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  tagTypes: ['Order'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    userOrder: build.mutation({
      query: (body) => ({
        url: '/order',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Order' }],
    }),
  }),
});

// console.log(?);
export const { useUserOrderMutation } = orderApi;
