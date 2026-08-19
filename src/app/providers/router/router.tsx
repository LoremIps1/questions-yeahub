import { AppLayout } from '@/app/layouts/AppLayout/AppLayout';
import {
  HomePage,
  LoginPage,
  MaterialsPage,
  NotFoundPage,
  QuestionDetailsPage,
  QuestionsPage,
  RegisterPage,
  SkillsPage,
  TrainerPage,
} from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/questions',
        element: <QuestionsPage />,
      },
      {
        path: 'questions/:questionsId',
        element: <QuestionDetailsPage />,
      },
      {
        path: '/trainer',
        element: <TrainerPage />,
      },
      {
        path: '/materials',
        element: <MaterialsPage />,
      },
      {
        path: '/skills',
        element: <SkillsPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
