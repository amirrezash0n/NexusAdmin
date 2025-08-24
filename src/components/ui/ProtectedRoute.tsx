import { useUser } from "@/hooks/useUser";
import SpinnerFullPage from "./SpinnerFullPage";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProp {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProp) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2.If there is No authenticated user , redirect to the /login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 3. While loading, show a spinner
  if (isLoading) return <SpinnerFullPage />;

  // 4.If there is a user, render the app
  if (isAuthenticated) return children;
}
