import { toast } from "react-toastify";

const UpdateHooks = async (url, data) => {
  fetch(url, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("from Data", data);
      if (data.status === "success") {
        toast.success("Update data successfully");
      } else if (data.status === "fail") {
        toast.error(
          `${
            data.message
              ? data.message
              : data.error.split(":").slice(2).join(":")
          }`
        );
      }
    })
    .catch((err) => {
      console.log("from nid update", err);
    });
};

export default UpdateHooks;
