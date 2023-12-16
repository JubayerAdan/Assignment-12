import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import { Navigate } from "react-router-dom";
import useIsAdmin from "../hooks/useIsAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading: authLoading } = useAuth();
  const [current, setCurrent] = useState(null);
  const [dbUser, refetch, userLoading] = useUser();
  const isAdmin = useIsAdmin();

  //   useEffect(() => {
  //     if (!userLoading) {
  //       const currentUser = dbUser.find((us) => us.email === user.email);
  //       setCurrent(currentUser || null);
  //     }
  //   }, [dbUser, user, userLoading]);

  if (authLoading) {
    return null; // or loading indicator
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  if (isAdmin) {
    return children;
  }

  return null; // Default case, if none of the conditions match
};

export default AdminRoutes;
