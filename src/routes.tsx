import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@pages';
import LoginPage from './pages/login/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
