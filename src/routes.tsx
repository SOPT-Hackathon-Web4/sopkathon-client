import { createBrowserRouter } from 'react-router-dom';
import { Dev, CreateQuiz, Home } from '@pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dev',
    element: <Dev />,
  },
  {
    path: '/create-quiz',
    element: <CreateQuiz />,
  },
]);

export default router;
