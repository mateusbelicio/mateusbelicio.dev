import { Outlet } from 'react-router';
import Header from './Header';

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default MainLayout;
