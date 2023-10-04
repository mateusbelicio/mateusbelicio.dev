import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';

import Home from './pages/Home';
import MainLayout from './components/MainLayout';
import Project from './pages/Project';

import ThemeProvider from './contexts/ThemeContext';

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
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
