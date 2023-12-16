import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosPublic();
  const {
    refetch,
    data: users = [],
    isLoading: userLoading,
  } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/users?apikey=ee30bfd7-9b83-4b5a-ad34-ccf526010ac9"
      );
      return res.data;
    },
  });
  return [users, refetch, userLoading];
};

export default useUser;
