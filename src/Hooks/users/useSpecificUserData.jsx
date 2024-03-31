import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";
import useAuthContext from "../context/useAuthContext";

const useSpecificUserData = (userRole, page, size) => {
  const userData = useAuthContext();

  const axiosPublic = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["user", userData, userRole, page, size], // will automatically compare values to
    enabled: !!userData,
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/user/specific?fieldName=role&fieldValue=${userRole}&page=${page}&size=${size}`
      );

      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useSpecificUserData;
