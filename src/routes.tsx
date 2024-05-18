import { createBrowserRouter } from 'react-router-dom';
import { Dev, Home, LoginPage } from '@pages';

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
]);

export default router;
