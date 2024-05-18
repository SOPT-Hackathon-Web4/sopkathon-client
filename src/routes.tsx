import { createBrowserRouter } from 'react-router-dom';
import { Dev, Home, LoginPage } from '@pages';
import ResultQuiz from './pages/ResultQuiz/ResultQuiz';
import RetryQuiz from './pages/RetryQuiz/RetryQuiz';

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
