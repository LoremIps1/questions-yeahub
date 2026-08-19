import type { ISkills } from './types';

export interface IGetSkillsParams {
  page?: number;
  limit?: number;
  specializations?: number[];
  authorId?: string;
  title?: string;
}

export interface ISkillsResponse {
  total: number;
  page: number;
  limit: number;
  data: ISkills[];
}
