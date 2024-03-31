import { toast } from "react-toastify";
import UpdateHooks from "./UpdateHooks";


const pricingPaymentPostHook = async(url, data, id) => {
 await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(async(d) => {
      const url = `https://backend.driveshikhun.com/api/v1/user/updateUser/${id}`;
      if (d.status === "success") {
       await UpdateHooks(url, {duration:data?.endDate,courses:data?.plan?.courses});
        toast.success("Payment Successfully Done");
      } else {
       toast.error(d?.error || "Something went wrong!");
      }
    });
};

export default pricingPaymentPostHook;
