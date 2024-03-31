import { cookies } from "next/headers";

const getSingleUser = async () => {
  const response = await fetch(
    "https://backend.driveshikhun.com/api/v1/user/getSingleUser",
    {
      headers: { Cookie: cookies().toString() },
    }
  );
  return response.json();
};

export default getSingleUser;
