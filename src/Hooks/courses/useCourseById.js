"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

const useCourseById = (id) => {
  const axiosPublic = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["courseById", id],
    queryFn: async () => {
      const response = await axiosPublic.get(`/course/getCoursesById/${id}`);
      return response.data.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useCourseById;
