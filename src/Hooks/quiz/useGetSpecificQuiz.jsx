import useAxiosPublic from "../axios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useGetSingleUserData from "../users/useGetSingleUserData";
const useGetSpecificQuiz = () => {
  const axiosPublic = useAxiosPublic();
  const { data: user } = useGetSingleUserData();
  const id = user?._id;
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["quizSpecific", id],
    enabled: !!id,
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/quiz/specific?fieldName=userId&fieldValue=${id}`
      );
      return response.data.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetSpecificQuiz;
