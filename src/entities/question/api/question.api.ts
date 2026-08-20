import { baseApi } from '@/shared/api/baseApi';
import type { IQuestionsResponse, IGetQuestionsParams } from '../model/api-types';
import type { IQuestion } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<IQuestionsResponse, IGetQuestionsParams>({
      query: (params) => ({
        url: '/questions/public-questions',
        params,
      }),
    }),
    getQuestionById: builder.query<IQuestion, number>({
      query: (id) => ({
        url: `/questions/public-questions/${id}`,
      }),
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
