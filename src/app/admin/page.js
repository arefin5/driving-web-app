"use client";

import {
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiRead } from "react-icons/gi";
import { LuSchool } from "react-icons/lu";
import usr from "/public/assets/Profile/camera.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import PaymentHistoryView from "@/src/components/Admin/PaymentHistory/PaymentHistoryView";
import Loading from "../loading";

const AdminPage = () => {
  const [userData, setUserData] = useState([]);
  const [instructorData, setInstructorData] = useState([]);
  const [recentUserAccountData, setRecentUserAccountData] = useState([]);
  const [recentPayment, setRecentPayment] = useState([]);
  const [revenue, setRevenue] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(
          "https://backend.driveshikhun.com/api/v1/user/length?fieldName=role&&fieldValue=user"
        );
        const instructorResponse = await axios.get(
          "https://backend.driveshikhun.com/api/v1/user/length?fieldName=role&&fieldValue=instructor"
        );
        const recentUserResponse = await axios(
          "https://backend.driveshikhun.com/api/v1/user/getRecentUserCreateAccount"
        );
        const recentPaymentResponse = await axios(
          "https://backend.driveshikhun.com/api/v1/payment/getPaymentLength"
        );
        const revenueResponse = await axios(
          "https://backend.driveshikhun.com/api/v1/payment/totalRevenue"
        );
        setRevenue(revenueResponse?.data);
        setRecentPayment(recentPaymentResponse?.data);
        setRecentUserAccountData(recentUserResponse?.data.data);
        setUserData(userResponse?.data);
        setInstructorData(instructorResponse?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleViewPayment = (payment) => {
    setSelectedUser(payment); // Set the selected user
    setIsViewModalOpen(true); // Open the modal
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" mt-5">
      {/* card four */}
      <section>
        <div className="container  m-auto">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-6  text-center">
            <div className=" bg-white dark:bg-darkbg shadow-2xl flex gap-5 justify-center items-center  p-5 rounded">
              <div>
                <p className="dark:text-white primary-text-color text-4xl font-semibold">
                  {userData?.total}
                </p>
                <p className="dark:text-white primary-text-color text-xl font-semibold">
                  ছাত্র-ছাত্রী
                </p>
              </div>
              <GiRead className="text-5xl dark:text-white text-[#2B388F] " />
            </div>
            <div className=" bg-white dark:bg-darkbg shadow-2xl flex gap-5 justify-center items-center  p-5 rounded">
              <div>
                <p className="dark:text-white primary-text-color text-4xl font-semibold">
                  {instructorData?.total}
                </p>
                <p className="dark:text-white primary-text-color text-xl font-semibold">
                  ইন্সট্রাক্টর
                </p>
              </div>
              <FaChalkboardTeacher className="text-5xl dark:text-white text-[#2B388F] " />
            </div>
            <div className=" bg-white dark:bg-darkbg shadow-2xl flex gap-5 justify-center items-center  p-5 rounded">
              <div>
                <p className="dark:text-white primary-text-color text-4xl font-semibold">
                  {recentPayment?.total}
                </p>
                <p className="dark:text-white primary-text-color text-xl font-semibold">
                  এনরোলমেন্ট
                </p>
              </div>
              <LuSchool className="text-5xl dark:text-white text-[#2B388F] " />
            </div>
            <div className=" bg-white dark:bg-darkbg shadow-2xl flex gap-5 justify-center items-center  p-5 rounded">
              <div>
                <p className="dark:text-white primary-text-color text-4xl font-semibold">
                  {revenue?.totalRevenue}
                </p>
                <p className="dark:text-white primary-text-color text-xl font-semibold">
                  আয়
                </p>
              </div>
              <FaHandHoldingDollar className="text-5xl dark:text-white text-[#2B388F] " />
            </div>
          </div>
        </div>
      </section>

      {/* table and student lists */}
      <section className="container">
        <div className="grid grid-cols-12 mt-8 gap-6">
          <div className="md:col-span-8  col-span-full">
            <div className="bg-white dark:bg-darkbg border-b border-solid border-gray-600 pb-3  flex justify-around py-4 capitalize items-center">
              <h2 className="text-xl font-semibold">সাম্প্রতিক পেমেন্ট</h2>

              <p href="">
                <button className="font-medium text-sm bg-secondarySolid px-5 py-2 rounded-sm text-white capitalize">
                  সব দেখুন..
                </button>
              </p>
            </div>
            <Table
              classNames={{
                base: "dark:bg-darkbg ",
                table: "dark:bg-darkbg",
                wrapper: "dark:bg-darkbg",
              }}
              className="dark:!bg-darkbg"
              aria-label="Example static collection table"
            >
              <TableHeader>
                <TableColumn>#</TableColumn>
                <TableColumn>নাম</TableColumn>
                <TableColumn className="text-center"> অ্যামাউন্ট</TableColumn>
                <TableColumn className="text-right pr-10">বিকল্প</TableColumn>
              </TableHeader>
              <TableBody>
                {recentPayment?.recentPayments?.map((payment, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">{index + 1}</TableCell>
                    <TableCell>{payment.user.name}</TableCell>

                    <TableCell className="text-center">
                      ${payment?.price}
                    </TableCell>
                    <TableCell className="text-right">
                      <button
                        onClick={() => handleViewPayment(payment)}
                        className="font-medium text-sm bg-secondarySolid px-3 py-2 rounded-sm text-white capitalize"
                      >
                        দেখুন..
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <PaymentHistoryView
            isOpen={isViewModalOpen}
            onOpenChange={setIsViewModalOpen}
            messageDetails={selectedUser}
          ></PaymentHistoryView>
          {/* Student lists */}
          <div className="md:col-span-4   col-span-full">
            <div className="bg-white dark:bg-darkbg border-b border-solid border-gray-600 pb-3  flex justify-around py-4 capitalize items-center">
              <h2 className="text-xl font-semibold">নতুন শিক্ষার্থী</h2>
              <Link href="/admin/allStudentLists">
                <button className="font-medium text-sm bg-secondarySolid px-5 py-2 rounded-sm text-white capitalize">
                  সব দেখুন..
                </button>
              </Link>
            </div>
            <Table
              classNames={{
                base: "dark:bg-darkbg ",
                table: "dark:bg-darkbg",
                wrapper: "dark:bg-darkbg",
              }}
              className="dark:!bg-darkbg"
              aria-label="Example static collection table"
            >
              <TableHeader>
                <TableColumn>#</TableColumn>
                <TableColumn>ছবি</TableColumn>
                <TableColumn className="text-center">নাম</TableColumn>
              </TableHeader>
              <TableBody>
                {recentUserAccountData?.map((recent, index) => (
                  <TableRow key={recent?._id}>
                    <TableCell className="text-center">{index + 1}</TableCell>
                    <TableCell>
                      <Image
                        className="border border-solid border-slate-200 rounded-full w-12 h-12"
                        src={
                          recent?.profilePicture
                            ? recent.profilePicture
                            : usr.src
                        }
                        alt="user image here"
                      />
                    </TableCell>
                    <TableCell className="text-center">
                      {recent?.name}
                    </TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
       
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
