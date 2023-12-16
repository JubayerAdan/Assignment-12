import React, { useState, useEffect } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useIsAdmin = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const result = await axiosPublic(
          `/users/${user.email}?apikey=ee30bfd7-9b83-4b5a-ad34-ccf526010ac9`
        );
        setIsAdmin(result.data.admin === true);
      } catch (error) {
        console.error("Error checking admin status:", error);
        // Handle the error as needed (e.g., set isAdmin to false or show an error message)
      }
    };

    checkAdminStatus();
  }, [axiosPublic, user.email]);

  return isAdmin;
};

export default useIsAdmin;
