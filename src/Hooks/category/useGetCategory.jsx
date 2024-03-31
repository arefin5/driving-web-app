import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

const useGetCategory = () => {
  const axiosPublic = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await axiosPublic.get("/categories/getCategories");
      return response.data.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetCategory;
