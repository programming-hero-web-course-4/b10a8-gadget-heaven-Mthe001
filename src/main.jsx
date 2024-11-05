
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from './Components/CartContext/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Head from './Components/Root/Head';
import Home from './Components/Home/Home';
import ProductPage from './Components/ProductPage/ProductPage';
import ProductDetail from './Components/CardDetails/CardDetails';
import Login from './Components/login/Login';
import Checkout from './Components/CheckOut/Checkout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Head />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </CartProvider>
  </StrictMode>
);

