import { baseApi } from '@/shared/api/baseApi';

import type { IGetSkillsParams, ISkillsResponse } from '../model/api-types';

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<ISkillsResponse, IGetSkillsParams>({
      query: (params) => ({
        url: '/skills',
        params,
      }),
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
