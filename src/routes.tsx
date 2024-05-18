import { createBrowserRouter } from 'react-router-dom';
import { Dev, Home } from '@pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dev',
    element: <Dev />,
  },
]);

export default router;
