import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

const useGetSingleQuiz = (id) => {
  const axiosPublic = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["singleQuiz", id],
    enabled: !!id,
    queryFn: async () => {
      const response = await axiosPublic.get(`/quiz/getQuizzesById/${id}`);

      return response.data.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetSingleQuiz;
