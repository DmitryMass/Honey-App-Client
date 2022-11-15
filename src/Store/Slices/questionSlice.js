import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'https://paradise-server.onrender.com/api';
// const URL = '/api';

export const questionApi = createApi({
  reducerPath: 'questionApi',
  tagTypes: ['Question'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    userQuestion: build.mutation({
      query: (body) => ({
        url: '/questions',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Question' }],
    }),
  }),
});

export const { useUserQuestionMutation } = questionApi;
