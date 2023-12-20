import { useQuery } from "@tanstack/react-query";

const useClasses = (query) => {
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", query],
    queryFn: async () => {
      const response = await fetch(
        `https://mistitsu-server.vercel.app/classes${
          query ? `?quantity=${query}` : ""
        }`
      );
      const data = await response.json();
      return data;
    },
  });

  return [classes, refetch];
};

export default useClasses;
