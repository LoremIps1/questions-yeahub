export const ROUTES = {
  questions: '/questions',
  trainer: '/trainer',
  materials: '/materials',
  skills: '/skills',
  login: '/login',
  register: '/register',

  question: (id: number | string) => `/questions/${id}`,
  questionsBySkill: (skillId: number) => `/questions?page=1&skills=${skillId}`,
  questionsByKeyword: (keyword: string) =>
    `/questions?page=1&keywords=${encodeURIComponent(keyword)}`,
  profile: (id: string) => `/profile/${id}`,
} as const;
