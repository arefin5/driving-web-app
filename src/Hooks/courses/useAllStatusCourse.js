import useAxiosPublic from "../axios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllStatusCourse = (status, page, size) => {
  const axiosPublic = useAxiosPublic();

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["allpendingCourses", page, size, status],
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/course/specific?fieldName=status&fieldValue=${status}&page=${page}&size=${size}`
      );

      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllStatusCourse;
