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

//  {
//       "id": 13,
//       "title": "JAVA",
//       "description": "Very nice",
//       "imageSrc": "string",
//       "createdAt": "2024-04-21T13:58:30.398Z",
//       "updatedAt": "2024-04-21T14:56:02.499Z",
//       "specializations": [
//         {
//           "id": 1,
//           "title": "React",
//           "slug": "react",
//           "description": "React разработчик",
//           "imageSrc": "http://example.com/image.jpg",
//           "createdAt": "2024-12-10T10:00:00.000Z",
//           "updatedAt": "2024-12-10T10:00:00.000Z",
//           "createdBy": {
//             "id": "dd429b2f-1877-4991-9a42-acdc76418476",
//             "username": "Nikitos_228"
//           }
//         }
//       ],
//       "createdBy": {
//         "id": "dd429b2f-1877-4991-9a42-acdc76418476",
//         "username": "Nikitos_228"
//       }
//     }
