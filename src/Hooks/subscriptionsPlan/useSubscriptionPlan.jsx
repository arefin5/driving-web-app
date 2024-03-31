import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "../axios/useAxiosPublic";

const useSubscriptionPlan = (page, size) => {
  const axiosPublic = useAxiosPublic();

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["allSubscriptionPlan", page, size],

    queryFn: async () => {
      const response = await axiosPublic.get(
        `/subscriptionPlans/specific?page=${page}&size=${size}
`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useSubscriptionPlan;
