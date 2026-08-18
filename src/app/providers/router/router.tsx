import { AppLayout } from '@/app/layouts/AppLayout/AppLayout';
import { QuestionDetailsPage } from '@/pages/questions-details-page/ui/QuestionDetailsPage';
import { QuestionsPage } from '@/pages/questons-page/ui/QuestionsPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <QuestionsPage />,
      },
      {
        path: 'questions/:questionsId',
        element: <QuestionDetailsPage />,
      },
    ],
  },
]);
