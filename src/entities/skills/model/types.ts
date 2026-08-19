export interface ISkillAuthor {
  id: string;
  username: string;
}
export interface ISpecializations {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: ISkillAuthor;
}

export interface ISkills {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: ISpecializations[];
  createdBy: ISkillAuthor;
}
