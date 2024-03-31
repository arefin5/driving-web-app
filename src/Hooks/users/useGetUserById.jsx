import useAxiosPublic from "../axios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useGetUserById = (id) => {
  const axiosPublic = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["user", id],
    enabled: !!id,
    queryFn: async () => {
      const response = await axiosPublic.get(`/user/getUserById/${id}`);

      return response.data.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetUserById;
