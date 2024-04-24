import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom";
import Error from "../Pages/Error/Error";
import HomePage from "../Pages/Home/Home";
import LayoutContainer from "../Root/LayoutComponents/LayoutContainer/LayoutContainer";


const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutContainer />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', element: <HomePage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
