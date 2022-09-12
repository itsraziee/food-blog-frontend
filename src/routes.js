import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import LandingPage from './pages/LandingPage';
import CreatePost from './pages/CreatePost'
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'blog', element: <Blog /> },
        { path: 'createPost', element: <CreatePost />}
      ],
    },
    {
      path: '/page',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'home', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '/', element: <LandingPage /> },
    { path: '*', element: <Navigate to="/page/404" replace /> },
  ]);
}
