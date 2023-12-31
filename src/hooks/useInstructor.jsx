import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const useInstructor = (query) => {
  const { data: instructor = [], refetch } = useQuery({
    queryKey: ["instructors", query],
    queryFn: async () => {
      const response = await fetch(
        `https://mistitsu-server.vercel.app/instructors${
          query ? `?quantity=${query}` : ""
        }`
      );
      const data = await response.json();
      return data;
    },
  });

  return [instructor, refetch];
};
export default useInstructor;
