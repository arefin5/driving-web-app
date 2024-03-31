import useAxiosPublic from "../axios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const UseGetSubsPlanById = (id) => {
  const axiosPublic = useAxiosPublic();

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["allSubscriptionPlanbyid", id],
    enabled: !!id,
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/subscriptionPlans/getSubscriptionPlanById/${id}`
      );
      return response.data.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default UseGetSubsPlanById;
