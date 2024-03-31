import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:8000/api/v1",
  baseURL: "https://backend.driveshikhun.com/api/v1",
  withCredentials: true,
  /*   headers: {
    "Content-Type": "multipart/form-data",
  }, */
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
