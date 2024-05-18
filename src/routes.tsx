import { createBrowserRouter } from 'react-router-dom';
import {
  Dev,
  CreateQuiz,
  SolveQuiz,
  MyPage,
  Home,
  LoginPage,
  ResultQuiz,
  RetryQuiz,
  CheckLogin,
  SolveQuizRetry,
} from '@pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/check',
    element: <CheckLogin />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/login/:next',
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
  {
    path: '/solve-quiz/retry',
    element: <SolveQuizRetry />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
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
