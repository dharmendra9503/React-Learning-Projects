
/*
* This project is created to understand React Router
* This project is created to demonstrate the new API of React Router v6.
*
* The new API is more declarative and easier to use.
* The new API is more similar to the way we define routes in React Router v5.
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Layout from './Layout';
import { Home, About, Contact, User, Github } from './components';
import { githubInfoLoader } from './components/Github/Github';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

/*
* React Router v6 has a new API for creating routes.
* The createRoutesFromElements function converts JSX elements into routes.
* The createBrowserRouter function creates a router from an array of routes.
* The Route component is used to define a route.
* The RouterProvider component is used to provide the router to the application.
* 
* This is easy way to define routes in React Router v6.
*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
