import { Header, Footer, Home } from './components';
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;