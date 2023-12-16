import { useQuery } from "@tanstack/react-query";

const useClasses = (query) => {
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", query],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/classes${query ? `?quantity=${query}` : ""}`
      );
      const data = await response.json();
      return data;
    },
  });

  return [classes, refetch];
};

export default useClasses;
