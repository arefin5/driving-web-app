"use client";


import axios from "axios";
import React, { useEffect, useState } from "react";

import { BsCashCoin, BsCashStack } from "react-icons/bs";
import { Icon } from "@iconify/react";
import PaymentHistoryView from "@/src/components/Admin/PaymentHistory/PaymentHistoryView";
import { Pagination } from "@nextui-org/react";
import Loading from "../../loading";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [payments, setPayments] = useState([]);
  const [revenue, setRevenue] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentResponse = await axios(
          `https://backend.driveshikhun.com/api/v1/payment/specific?page=${currentPage}&size=${itemsPerPage}`
        );
        const revenueResponse = await axios(
          "https://backend.driveshikhun.com/api/v1/payment/totalRevenue"
        );
        console.log(paymentResponse.data.total);
        setRevenue(revenueResponse?.data);
        setPayments(paymentResponse.data.data);
        setTotal(paymentResponse.data.total);
        setTotalPages(Math.ceil(total / itemsPerPage));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage, total]);
  if (loading) {
    return <Loading />;
  }

  // Filter payments based on search term
  const filteredPayments = payments.filter(
    (payment) =>
      payment.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.price.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleViewPayment = (payment) => {
    setSelectedUser(payment); // Set the selected user
    setIsViewModalOpen(true); // Open the modal
  };

  return (
    <div>
      <section className="mt-6">
        <div className="container  m-auto">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-6  text-center">
            <div className=" bg-white dark:bg-darkbg shadow-2xl flex gap-5 justify-center items-center  p-5 rounded">
              <div>
                <p className="dark:text-white primary-text-color text-4xl font-semibold">
                  {revenue?.todayRevenue}
                </p>
                <p className="dark:text-white primary-text-color text-xl font-semibold">
                  আজকের আয়
                </p>
              </div>
              <BsCashCoin className="text-5xl dark:text-white text-[#2B388F] " />
            </div>

            <div className=" bg-white dark:bg-darkbg shadow-2xl flex gap-5 justify-center items-center  p-5 rounded">
              <div>
                <p className="dark:text-white primary-text-color text-4xl font-semibold">
                  {revenue?.last6MonthsRevenue}
                </p>
                <p className="dark:text-white primary-text-color text-xl font-semibold">
                  ছয় মাসের আয়
                </p>
              </div>
              <BsCashStack className="text-5xl dark:text-white text-[#2B388F] " />
            </div>
            <div className=" bg-white dark:bg-darkbg shadow-2xl flex gap-5 justify-center items-center  p-5 rounded">
              <div>
                <p className="dark:text-white primary-text-color text-4xl font-semibold">
                  {revenue?.totalRevenue}
                </p>
                <p className="dark:text-white primary-text-color text-xl font-semibold">
                  সর্বমোট আয়
                </p>
              </div>
              <BsCashStack className="text-5xl dark:text-white text-[#2B388F] " />
            </div>
          </div>
        </div>
      </section>

      <div className="md:col-span-8 col-span-full mt-5">
        <div className="bg-white dark:bg-darkbg border-b border-solid border-gray-600 pb-3  lg:flex justify-around py-4 capitalize items-center p-2 gap-6">
          <h2 className="text-xl font-semibold w-full max-w-fit">
            সম্পূর্ণ পেমেন্ট হিস্টোরি
          </h2>

          <div className="flex relative rounded-md w-full mt-3">
            <input
              type="text"
              value={searchTerm}
              placeholder="নাম দিয়ে সার্চ করুন"
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
          {filteredPayments.length === 0 ? (
            <p>No results found</p>
          ) : (
            <p className="  ">{filteredPayments.length} results found</p>
          )}
        </div>

        <div className="relative border border-solid border-black/30 rounded-xl pb-5 !max-h-full overflow-auto md:overflow-y-auto md:scrollbar-hide mt-6">
          <table className="w-full max-lg:min-w-[700px] px-10 table-auto text-sm text-left overflow-scroll md:overflow-hidden  rounded-xl">
            <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
              <tr className="text-lg grid grid-cols-12 px-10 py-5 items-center">
                <th scope="col" className=" text-left col-span-1">
                  #
                </th>
                <th scope="col" className=" col-span-2 text-center">
                  নাম
                </th>
                <th scope="col" className=" col-span-2 text-center">
                  প্যাকেজ
                </th>
                <th scope="col" className="col-span-3 text-center">
                  পেইড অ্যামাউন্ট
                </th>
                <th scope="col" className="col-span-2 text-center">
                  তারিখ
                </th>
                <th scope="col" className=" text-right col-span-2">
                  একশন
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment, index) => (
                <tr
                  key={payment?._id}
                  className="mx-5 mt-4  bg-white border-solid border-2 rounded border-primarySolid primary-text-color dark:text-white dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-12"
                >
                  <th
                    scope="row"
                    className="pl-4 py-3 font-medium whitespace-nowrap text-center  border-collapse col-span-1"
                  >
                    <span className="flex items-center gap-2">{index + 1}</span>
                  </th>
                  <td className="py-3 text-center col-span-2 border-collapse">
                    {payment.user.name}
                  </td>
                  <td className="py-3 text-center col-span-2 border-collapse">
                    {payment.plan.name}
                  </td>
                  <td className=" py-3 text-center col-span-3 border-collapse">
                    ${payment.price}
                  </td>
                  <td className=" py-3 text-center col-span-2 border-collapse">
                    {payment.endDate}
                  </td>
                  <td className=" py-3 text-right  col-span-2 border-collapse mr-3">
                    <button
                      onClick={() => handleViewPayment(payment)}
                      aria-label="Open delete confirmation"
                      className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                    >
                      <Icon
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                        icon="carbon:view-filled"
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

      <PaymentHistoryView
        isOpen={isViewModalOpen}
        onOpenChange={setIsViewModalOpen}
        messageDetails={selectedUser}
      ></PaymentHistoryView>
    </div>
  );
};

export default Page;
