import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Error from "../components/Error";
import Gadgecard from "../components/Gadgecard";
import Company from "../pages/Company";
import GadgeDetails from "../pages/GadgeDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('/categories.json'),
          children: [
            {
              path: '/',
              element: <Gadgecard></Gadgecard>,
              loader: () => fetch('/fakeData.json'),
            },
            {
              path: '/category/:category',
              element: <Gadgecard></Gadgecard>,
              loader: () => fetch('/fakeData.json'),
            },
          ],
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "/company",
          element: <Company></Company>,
        },
        {
          path: "/gadge/:product_id",
          element: <GadgeDetails></GadgeDetails>,
          loader: () => fetch('/fakeData.json')
        }
      ],
    },
  ]);


  export default router