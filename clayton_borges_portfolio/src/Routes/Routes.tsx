import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom";
import App from "../Root/App/App";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
    ],
  },
  
];

export const router = createBrowserRouter(routes);
