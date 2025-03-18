import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/Home.tsx';
import './scss/index.scss';
import { RoutePaths } from './constants';
import { JSX } from 'react';
import { Layout } from './layouts/Layout/Layout.tsx';
import { Policy } from './pages/Policy/Policy.tsx';

const router = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    element: <Layout />,
    children: [
      { path: RoutePaths.HOME, element: <Home /> },
      { path: RoutePaths.POLICY, element: <Policy /> },
    ],
  },
]);

export const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
