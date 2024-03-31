"use client";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import useGetSingleUserData from "../Hooks/users/useGetSingleUserData";

export const AuthContext = createContext(null);

const AuthContextProviders = ({ children }) => {
  const { refetch } = useGetSingleUserData();
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("token"));

    const observer = async () => {
      setUser(currentUser);
      if (currentUser) {
        const { data } = await axiosPublic.post("/user/accessToken", {
          email: currentUser.userEmail,
        });
        if (data.status === "success") {
          refetch();
        }
        console.log("data", data);
      } else {
        const { data } = await axiosPublic.post("/user/removeToken");
        console.log("token", data);
        if (data.status === "success") {
          // Remove "token" from local storage heressssssfff
          localStorage.removeItem("token");
          refetch();
        }
        console.log("data", data);
      }
    };

    observer();
  }, [axiosPublic, refetch]);

  const authInfo = { user, setUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProviders;
