import { useEffect, useState } from "react";

const useGetDataHook = (url, refetch) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          const contentType = res.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Invalid content type or non-JSON response");
          }
          return res.json();
        })
        .then((jsonData) => {
          setData(jsonData?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  }, [url, refetch]);

  return [data, loading];
};

export default useGetDataHook;
