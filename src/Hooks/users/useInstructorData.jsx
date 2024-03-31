import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";
import useAuthContext from "../context/useAuthContext";

const useInstructorData = (userRole, status, page, size) => {
  const userData = useAuthContext();

  const axiosPublic = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["pendingIstructor", userData, userRole, status, page, size],
    enabled: !!userData,
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/user/specific?fieldName=role&fieldValue=${userRole}&fieldName2=status&fieldValue2=${status}&page=${page}&size=${size}
`
      );

      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useInstructorData;
