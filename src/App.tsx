import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';

import Home from './pages/Home';
import MainLayout from './components/MainLayout';
import Project from './pages/Project';

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects/:projectID', element: <Project /> }
    ]
  }
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
