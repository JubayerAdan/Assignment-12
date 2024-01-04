import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import { Navigate } from "react-router-dom";
import useIsAdmin from "../hooks/useIsAdmin";
import FourZeroThree from "../components/FourZeroThree";

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
    return <FourZeroThree></FourZeroThree>;
  }

  if (isAdmin) {
    return children;
  }

  return null;
};

export default AdminRoutes;
