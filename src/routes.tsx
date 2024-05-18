import { createBrowserRouter } from 'react-router-dom';
import { Dev, CreateQuiz, SolveQuiz, MyPage, Home, LoginPage } from '@pages';

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
  {
    path: '/mypage',
    element: <MyPage />,
  },
]);

export default router;
