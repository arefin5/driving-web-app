import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";
import useAuthContext from "../context/useAuthContext";

const useGetSingleUserData = () => {
  const userData = useAuthContext();
console.log(userData, "userData");
const axiosPublic = useAxiosPublic();
const { isLoading, isError, data, error, refetch } = useQuery({
  queryKey: ["user", userData],
  enabled: !!userData,

  queryFn: async () => {
    const response = await axiosPublic.get(
      `/user/getSingleUser?email=${userData?.user?.userEmail}`
      
    );
    console.log(response ,"single user ")

    return response.data.data;
  },
});
  return { isLoading, isError, data, error, refetch };
};

export default useGetSingleUserData;
