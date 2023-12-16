import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useBook = (isPublic) => {
  const { user } = useAuth();
  const { refetch, data: book = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/book${!isPublic ? "?email=" + user.email : ""}`
      );
      return res.data;
    },
  });
  return [book, refetch];
};

export default useBook;
