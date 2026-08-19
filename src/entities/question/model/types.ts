export interface IUserShort {
  id: string;
  username: string;
}

export interface IQuestionSpecialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: IUserShort;
}

export interface IQuestionSkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
}

export interface IQuestionTopic {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
}

export interface IQuestion {
  id: number;
  title: string;
  slug: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];

  longAnswer: string;
  shortAnswer: string;

  status: string;
  rate: number;
  complexity: number;

  createdById: string;
  updatedById: string;

  questionSpecializations: IQuestionSpecialization[];
  questionSkills: IQuestionSkill[];
  questionTopics: IQuestionTopic[];

  createdAt: string;
  updatedAt: string;

  createdBy: IUserShort;
  updatedBy: IUserShort;
}
