import { createBrowserRouter, RouterProvider, RouteObject, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';

import Home from './screens/Home';
import MainLayout from './components/MainLayout';
import Project from './screens/Project';

import store from './lib/stores/store';
import { getProjectData } from './lib/utils/projects';

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Navigate to="/#projects" replace={true} /> },
      {
        path: '/projects/:slug',
        element: <Project />,
        loader: async ({ params }) => await getProjectData(params.slug || '')
      }
    ]
  }
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </Provider>
  );
}

export default App;
