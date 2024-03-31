import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import Loading from "@/src/app/loading";

import axios from "axios";
import { useEffect, useState } from "react";

const AllTransactions = () => {
  const { data } = useGetSingleUserData();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentResponse = await axios(
          `https://backend.driveshikhun.com/api/v1/payment/specific?fieldName=userId&&fieldValue=${data?._id}`
        );

        setPayments(paymentResponse.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [data?._id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="relative border  overflow-scroll lg:overflow-hidden lg:scrollbar-hide  border-solid border-black/30 rounded-xl ">
      <table className="w-full max-lg:min-w-[800px] overflow-scroll lg:overflow-hidden table-auto m-auto text-sm text-left  rounded-xl">
        <thead className="  text-white uppercase pl-10 bg-loginButton">
          <tr className="text-base md:text-lg grid grid-cols-12">
            <th className="pl-10 pt-7 pb-5 col-span-3"> প্যাকেজ</th>
            <th className="pt-7 pb-5 col-span-3 text-center">সময়কাল</th>
            <th className="pt-7 pb-5 text-center col-span-2">মূল্য</th>
            <th className="pt-7 pb-5 text-center  col-span-2">
            ট্রানজেকশন আইডি
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment._id}
              className="bg-white grid grid-cols-12 primary-text-color dark:text-white border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-base md:text-lg"
            >
              <td className="flex col-span-3">
                <div className="pl-10 py-4 font-medium whitespace-nowrap flex items-center gap-2">
                  <span>{payment?.plan?.name}</span>
                </div>
              </td>
              <td className=" py-4 col-span-3 text-center ">{payment?.plan?.duration}  Months</td>
              <td className=" py-4 col-span-2 text-center ">
              {payment?.plan?.price} USD
              </td>
              <td className=" py-4 col-span-2 text-center ">
              {payment?.transactionId} 
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTransactions;
