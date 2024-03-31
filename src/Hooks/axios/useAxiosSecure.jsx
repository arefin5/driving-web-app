/* eslint-disable no-undef */
import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:8000/api/v1",
  baseURL: "https://backend.driveshikhun.com/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {
  // Add a request interceptor for axiosSecure
  axiosSecure.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor for axiosSecure
  axiosSecure.interceptors.response.use(
    function (response) {
      console.log("response", response);

      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
