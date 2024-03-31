import { toast } from "react-toastify";


const PostHooks = (url, data, successMsg, refetch, setRefetch) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Refetch value:", refetch);
      console.log("Type of setRefetch:", typeof setRefetch);
      
      if (typeof setRefetch === "function") {
        setRefetch(!refetch);
      } else {
        console.error("setRefetch is not a function");
      }
      
      if (data.status === "success") {
        if(successMsg){
          setRefetch(!refetch)
        }
        return toast.success(successMsg ? successMsg : "Data Posted");
      } else {
        return toast.error(`${data.error}`);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      return toast.error("An error occurred while posting data.");
    });
};

export default PostHooks;
