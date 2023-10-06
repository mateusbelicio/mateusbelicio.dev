import { createBrowserRouter, RouterProvider, RouteObject, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './screens/Home';
import MainLayout from './components/MainLayout';
import Project from './screens/Project';

import ThemeProvider from './lib/contexts/ThemeContext';

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Navigate to="/#projects" replace={true} /> },
      { path: '/projects/:slug', element: <Project /> }
    ]
  }
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <ThemeProvider>
        <AnimatePresence>
          <RouterProvider router={router} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
