// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import Statistics from './Components/Statistics/Statistics';
// import Dashboard from './Components/Dashboard/Dashboard';
// import ErrorPage from './Components/ErrorPage/ErrorPage';
// import Head from './Components/Root/Head';


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Loggin from './Components/login/login';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Head></Head>,
//     errorElement: <ErrorPage></ErrorPage>,
//     children: [

//     ],

//   },
//   {
//     path: "/statistics",
//     element: <Statistics></Statistics>,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard></Dashboard>,
//   },
//   {
//     path: "/login",
//     element: <Loggin></Loggin>,
//   },

// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )



// Main router setup file (e.g., index.js)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Head from './Components/Root/Head';
import ProductPage from './Components/ProductPage/ProductPage'; // Import the ProductPage component
import ProductDetail from './Components/CardDetails/CardDetails'; // Import the ProductDetail component
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loggin from './Components/login/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Head></Head>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [],
  },
  {
    path: "/statistics",
    element: <Statistics></Statistics>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/login",
    element: <Loggin></Loggin>,
  },
  {
    path: "/products", // Add this route for the Product Page
    element: <ProductPage></ProductPage>,
  },
  {
    path: "/products/:id", // Add this route for the Product Detail page
    element: <ProductDetail></ProductDetail>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

