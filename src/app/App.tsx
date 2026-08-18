import { router } from '@/app/providers/router/router';
import { RouterProvider } from 'react-router-dom';
import '@/app/styles/index.css';

export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
