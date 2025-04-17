import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Mobile from './component/Mobile/Mobile.jsx';
import Laptop from './component/Laptop/Laptop.jsx';
import Users from './component/Users/Users.jsx';
import Users2 from './component/Users2/Users2.jsx';
import UserDetails from './component/UserDetails/UserDetails.jsx';

const reactPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobile', Component: Mobile },
      { path: 'laptop', Component: Laptop },
      {
        path: 'user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'user2',
        element: 
        <Suspense fallback={ <span>Loading.....</span> }>
          <Users2 reactPromise={reactPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: UserDetails,
      }
    ]
  },
  {
    path: 'about',
    element: <div>about page</div>
  },
  {
    path: 'blogs',
    element: <div>All my blogs are here</div>
  },
  {
    path:'app',
    Component: App
  },
  {
    path: 'app2',
    element: <App></App>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
