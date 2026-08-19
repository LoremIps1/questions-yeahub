export interface ISpecializationAuthor {
  id: string;
  username: string;
}

export interface ISpecialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: ISpecializationAuthor;
}
