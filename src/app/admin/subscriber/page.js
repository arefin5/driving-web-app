"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

import { AiOutlineBarChart } from "react-icons/ai";

import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { Pagination } from "@nextui-org/react";
import Loading from "../../loading";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [subscribe, setSubscribe] = useState([]);
  const [totalEmail, setTotalEmail] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const subscribeResponse = await axios(
          `https://backend.driveshikhun.com/api/v1/subscribe/specific?page=${currentPage}&size=${itemsPerPage}`
        );
        const totalEmailResponse = await axios(
          "https://backend.driveshikhun.com/api/v1/subscribe/total-subscribed-emails"
        );

        setTotalEmail(totalEmailResponse?.data);
        setSubscribe(subscribeResponse.data.data);
        setTotal(subscribeResponse.data.total);
        setTotalPages(Math.ceil(total / itemsPerPage));

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [total, currentPage, itemsPerPage]);

  const handleDelete = async (_id) => {
    try {
      await axios.delete(
        `https://backend.driveshikhun.com/api/v1/subscribe/deleteSubscribe/${_id}`
      );
      const updatedSubscribe = subscribe.filter((item) => item._id !== _id);
      setSubscribe(updatedSubscribe);

      // Update total count of subscribed emails
      const totalEmailResponse = await axios(
        "https://backend.driveshikhun.com/api/v1/subscribe/total-subscribed-emails"
      );
      setTotalEmail(totalEmailResponse?.data);

      toast.success("Subscription deleted successfully");
    } catch (error) {
      console.error("Error deleting email:", error);
      toast.error("Failed to delete subscription");
    }
  };

  const filteredSubscribe = subscribe.filter((item) =>
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mt-6">
      <section>
        <div className="container  m-auto">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-6  text-center">
            <div className=" bg-white dark:bg-darkbg shadow-2xl flex gap-5 justify-center items-center  p-5 rounded">
              <div>
                <p className="dark:text-white primary-text-color text-4xl font-semibold">
                  {totalEmail?.total}
                </p>
                <p className="dark:text-white primary-text-color text-xl font-semibold">
                  টোটাল ইমেইল
                </p>
              </div>
              <AiOutlineBarChart className="text-5xl dark:text-white text-[#2B388F] " />
            </div>
          </div>
        </div>
      </section>

      <div className="md:col-span-8 col-span-full mt-5">
        <h2 className="text-xl font-semibold mb-2">সাবস্ক্রাইবার হিস্টরি</h2>
        <div className="bg-white dark:bg-darkbg border-b border-solid border-gray-600 pb-3  lg:flex justify-around py-4 capitalize items-center p-2">
          <div className="flex relative rounded-md w-full mt-3">
            <input
              type="text"
              value={searchTerm}
              placeholder="ইমেইল দিয়ে সার্চ করুন"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            />
            <button className="inline-flex items-center gap-2 bg-primarySolid text-white text-lg font-semibold py-3 px-6 rounded-r-md hover:bg-secondary/90">
              <span>search</span>
              <span className="hidden md:block">
                <Icon icon="material-symbols:search"></Icon>
              </span>
            </button>
          </div>
        </div>
        <div className="text-gray-600 mt-2 ml-2">
          {filteredSubscribe.length === 0 ? (
            <p>No results found</p>
          ) : (
            <p>{filteredSubscribe.length} results found</p>
          )}
        </div>

        <div className="relative border border-solid border-black/30 rounded-xl pb-5 !max-h-full overflow-y-auto overflow-x-scroll xl:overflow-x-hidden xl:scrollbar-hide mt-5">
          <table className="w-full max-lg:min-w-[800px] px-10 table-auto text-sm text-left overflow-hidden  rounded-xl">
            <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
              <tr className="text-lg grid grid-cols-3 place-content-between px-10 py-5 items-center">
                <th scope="col" className=" text-left ">
                  #
                </th>
                <th scope="col" className=" text-center ">
                  ইমেইল
                </th>

                <th scope="col" className=" text-right ">
                  একশন
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSubscribe?.map((payment, index) => (
                <tr
                  key={payment._id}
                  className="mx-5 mt-4 bg-white dark:text-white border-solid border-2 rounded border-primarySolid primary-text-color dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-3 justify-between items-center place-content-between"
                >
                  <th
                    scope="row"
                    className="pl-4 py-3 font-medium  border-collapse"
                  >
                    {index + 1}
                  </th>
                  <td
                    scope="row"
                    className="pl-4 py-3 font-medium text-center  border-collapse"
                  >
                    {payment.email}
                  </td>
                  <td className="pr-4 py-3 text-right flex justify-end items-center border-collapse">
                    <button
                      onClick={() => handleDelete(payment?._id)}
                      aria-label="Open delete confirmation"
                      className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                    >
                      <Icon
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                        icon="mdi:delete-clock"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" my-5">
        <Pagination
          classNames={{
            item: "w-8 h-8 text-small rounded-none bg-transparent",
            cursor: `bg-primaryGradiant dark:!bg-darkbg shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold`,
            prev: "dark:!bg-darkbg",
            next: "dark:!bg-darkbg",
          }}
          showControls
          total={totalPages}
          initialPage={currentPage + 1} // Increment currentPage by 1 for UI display
          page={currentPage + 1} // Increment currentPage by 1 for UI display
          onChange={(currentPage) => {
            setCurrentPage(currentPage - 1); // Decrement currentPage by 1 internally
          }}
        />
      </div>
    </div>
  );
};

export default Page;
