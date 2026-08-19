import type { ISpecialization } from './types';

export interface IGetSpecializationsParams {
  page?: number;
  limit?: number;
  authorId?: string;
  title?: string;
}

export interface ISpecializationsResponse {
  total: number;
  page: number;
  limit: number;
  data: ISpecialization[];
}
