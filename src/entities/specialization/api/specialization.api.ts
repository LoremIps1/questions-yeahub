import { baseApi } from '@/shared/api/baseApi';

import type { IGetSpecializationsParams, ISpecializationsResponse } from '../model/api-types';

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<ISpecializationsResponse, IGetSpecializationsParams>({
      query: (params) => ({
        url: '/specializations',
        params,
      }),
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationApi;
