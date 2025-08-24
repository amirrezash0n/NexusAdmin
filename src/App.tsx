import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import AppLayout from "./components/layout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";
import Help from "./pages/Help";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
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
      {
        path: "help",
        element: <Help />,
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
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
