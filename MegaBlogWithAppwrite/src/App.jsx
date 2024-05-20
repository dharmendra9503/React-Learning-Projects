import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth";
import { login, logout } from './features/index';
import { Header, Footer, LoadingSpinner } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("Catch: ", error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App;