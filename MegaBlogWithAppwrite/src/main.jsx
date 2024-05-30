import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import {
  Home as HomePage,
  Login as LoginPage,
  Signup as SignupPage,
  AddPost as AddPostPage,
  AllPosts as AllPostsPage,
  EditPost as EditPostPage,
  Post as PostPage
} from './pages';
import { AuthLayout } from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<HomePage />} />
      <Route path='login'
        element={
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        }
      />
      <Route path='signup'
        element={
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        }
      />
      <Route path='my-posts'
        element={
          <AuthLayout authentication>
            <AllPostsPage />
          </AuthLayout>
        }
      />
      <Route path='add-post'
        element={
          <AuthLayout authentication>
            <AddPostPage />
          </AuthLayout>
        }
      />
      <Route path='edit-post/:slug'
        element={
          <AuthLayout authentication>
            <EditPostPage />
          </AuthLayout>
        }
      />
      <Route path="post/:slug"
        element={
          <PostPage />
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
