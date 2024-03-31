"use client";

import { AuthContext } from "@/src/context/AuthContextProviders";
import { useContext } from "react";

const useAuthContext = () => {
  const user = useContext(AuthContext);
  return user;
};

export default useAuthContext;
