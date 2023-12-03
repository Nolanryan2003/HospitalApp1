import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";

export const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Check if the user is authenticated
        await axios.get("http://localhost:5555/auth/userprofile");

        setIsAuthenticated(true);
      } catch (error) {
        console.error("Authentication error:", error);
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    verifyUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or any loading component
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
