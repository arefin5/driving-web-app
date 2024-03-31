import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

const useGetCategoryById = (id) => {
  const axiosPublic = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["categoryById", id],
    enabled: !!id,
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/categories/getCategoryById/${id}`
      );
      return response.data.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetCategoryById;
