import type { IQuestion } from './types';

export type SkillFilterMode = 'ALL' | 'ANY';

export type QuestionsOrderBy = 'createdAt' | 'title' | 'rate' | 'complexity' | 'createdById';

export type SortOrder = 'ASC' | 'DESC';

export interface IGetQuestionsParams {
  page?: number;
  limit?: number;

  title?: string;
  titleOrDescription?: string;

  skills?: string[];
  skillFilterMode?: SkillFilterMode;

  topics?: string[];

  complexity?: number[];
  collection?: number;
  rate?: number[];

  keywords?: string[];

  specializationId?: number;
  specializationSlug?: string;

  createdAtFrom?: string;
  createdAtTo?: string;

  orderBy?: QuestionsOrderBy;
  order?: SortOrder;

  random?: boolean;
}

export interface IQuestionsResponse {
  total: number;
  page: number;
  limit: number;
  data: IQuestion[];
}
