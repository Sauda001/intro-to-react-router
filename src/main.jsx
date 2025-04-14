import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Mobile from './component/Mobile/Mobile.jsx';
import Laptop from './component/Laptop/Laptop.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home},
      { path: 'mobile', Component: Mobile },
      { path: 'laptop', Component: Laptop }
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
