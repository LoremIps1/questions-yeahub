export const ROUTES = {
  questions: '/questions',
  trainer: '/trainer',
  materials: '/materials',
  skills: '/skills',
  login: '/login',
  register: '/register',

  questionsBySkill: (skillId: number) => `/questions?page=1&skills=${skillId}`,

  questionsByKeyword: (keyword: string) =>
    `/questions?page=1&keywords=${encodeURIComponent(keyword)}`,
} as const;
