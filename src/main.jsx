

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from './Components/CartContext/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify styles

// Components
import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Head from './Components/Root/Head';
import Home from './Components/Home/Home';
import ProductPage from './Components/ProductPage/ProductPage';
import ProductDetail from './Components/CardDetails/CardDetails';
import Login from './Components/login/Login'; // Ensure correct component naming
import Checkout from './Components/CheckOut/Checkout';

// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Head />, // Main layout component
    errorElement: <ErrorPage />, // Error page for unknown routes
    children: [
      {
        index: true,
        element: <Home />, // Default component for the home route
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
        element: <Login />, // Corrected component name
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

// Render App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </CartProvider>
  </StrictMode>
);

