import { createBrowserRouter } from 'react-router-dom';
import { Dev, Home, LoginPage, ResultQuiz, RetryQuiz } from '@pages';

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
    path: '/result-quiz',
    element: <ResultQuiz />,
  },
  {
    path: '/retry-quiz',
    element: <RetryQuiz />,
  },
]);

export default router;
