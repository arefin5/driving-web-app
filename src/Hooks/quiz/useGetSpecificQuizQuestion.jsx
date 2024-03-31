import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";
const useGetSpecificQuizQuestion = (name, id) => {
  const axiosPublic = useAxiosPublic();
  console.log(name, id);
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["quizSpecificQuestions", id, name],
    // enabled: !!id,
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/quizQuestions/specific?fieldName=quizId&fieldValue=65b5f4a71244684e2eff27d4`
      );
      return response.data.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetSpecificQuizQuestion;
