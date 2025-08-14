import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/layout/AppLayout";
import Error from "./pages/Error";

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      { path: "products", element: <Products /> },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
