import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

const useAllCoursesData = (page, size) => {
  const axiosPublic = useAxiosPublic();

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["allCourses", page, size],

    queryFn: async () => {
      const response = await axiosPublic.get(
        `/course/specific?page=${page}&size=${size}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllCoursesData;
