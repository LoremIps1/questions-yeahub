import { ROUTES } from '@/shared/config/routes/routes';

interface NavigationItem {
  label: string;
  to: string;
}

export const navigationItems: NavigationItem[] = [
  {
    label: 'База вопросов',
    to: ROUTES.questions,
  },
  {
    label: 'Тренажёр',
    to: ROUTES.trainer,
  },
  {
    label: 'Материалы',
    to: ROUTES.materials,
  },
  {
    label: 'Навыки (hh)',
    to: ROUTES.skills,
  },
];
