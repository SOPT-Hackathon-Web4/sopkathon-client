import { createBrowserRouter } from 'react-router-dom';
import { Dev, CreateQuiz, SolveQuiz, Home, LoginPage } from '@pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dev',
    element: <Dev />,
  },
  {
    path: '/create-quiz',
    element: <CreateQuiz />,
  },
  {
    path: '/solve-quiz',
    element: <SolveQuiz />,
  },
]);

export default router;
