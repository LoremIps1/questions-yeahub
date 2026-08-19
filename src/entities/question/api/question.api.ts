import { baseApi } from '@/shared/api/baseApi';
import { type IQuestionsResponse, type IGetQuestionsParams } from '../model/api-types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<IQuestionsResponse, IGetQuestionsParams>({
      query: (params) => ({
        url: '/questions/public-questions',
        params,
      }),
    }),
  }),
});

export const { useGetQuestionsQuery } = questionApi;
