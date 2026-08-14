import { QuestionDetailsPage } from '@/pages/questions-details-page/ui/QuestionDetailsPage';
import { QuestionsPage } from '@/pages/questons-page/ui/QuestionsPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <QuestionsPage />,
  },
  {
    path: 'questions/:questionsId',
    element: <QuestionDetailsPage />,
  },
]);
