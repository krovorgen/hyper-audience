import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/Home.tsx';
import './scss/index.scss';
import { RoutePaths } from './constants';
import { JSX } from 'react';
import { Layout } from './layouts/Layout/Layout.tsx';
import { Policy } from './pages/Policy/Policy.tsx';
import { PolicyOutput } from './pages/PolicyOutput/PolicyOutput.tsx';
import { Terms } from './pages/Terms/Terms.tsx';

const router = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    element: <Layout />,
    children: [
      { path: RoutePaths.HOME, element: <Home /> },
      { path: RoutePaths.POLICY, element: <Policy /> },
      { path: RoutePaths.POLICY_OUTPUT, element: <PolicyOutput /> },
      { path: RoutePaths.TERMS, element: <Terms /> },
    ],
  },
]);

export const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
