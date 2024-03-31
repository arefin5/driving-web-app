import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

const useAllSpecificCourseData = (id) => {
  const axiosPublic = useAxiosPublic();

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["allSpecificDataCourses", id],
    enabled: !!id,
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/course/specific?fieldName=userId&fieldValue=${id}`
      );

      return response.data.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllSpecificCourseData;
