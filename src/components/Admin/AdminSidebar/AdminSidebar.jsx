"use client";
import { RxDashboard } from "react-icons/rx";

import { User } from "@nextui-org/user";

import {
  RiBook2Line, RiFoldersLine,

  

} from "react-icons/ri";
import { TbCategoryPlus, TbPackages, TbUserCircle } from "react-icons/tb";
import { Image } from "@nextui-org/react";
import DashboardNavItem from "../../ui/features/Dashboard/Shared/DashboardNavItem";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import { MdAssignmentAdd, MdWeb } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { useState } from "react";
import { BsSliders2 } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";

const AdminSidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const { data: user } = useGetSingleUserData();
  const [openLgDropdown, setOpenLgDropdown] = useState(false);

  const openLandingPage = () => {
    setOpenLgDropdown(!openLgDropdown);
  };

  return (
    <div className="relative  font-liador">
      <div
        onClick={() => setToggleSidebar(!toggleSidebar)}
        className={`absolute hidden lg:inline-block cursor-pointer top-7 z-50 ${
          toggleSidebar ? "-right-12" : "-right-5"
        }   bg-[#FBFBFB] dark:bg-darkbg dark:border-white  border border-solid rounded-lg border-[rgba(198,47,143,0.30)] p-[7px]`}
      >
        <Image
          width={48}
          height={48}
          className="max-w-full h-full opacity-100 "
          alt="arrow-left-circle"
          src={`${
            toggleSidebar
              ? "/assets/dashboard/arrow-left-circle.svg"
              : "/assets/dashboard/arrow-right-circle.svg"
          }`}
        />
      </div>
      <div
        className={`bg-[#F2F2F2] dark:bg-darkbg transition-all duration-300 ${
          toggleSidebar ? "w-[100px]" : "w-full lg:w-[305px]"
        } py-8 px-6 relative `}
      >
        <User
          className="capitalize"
          size={50}
          name={` ${toggleSidebar ? "" : user?.name}`}
          description={
            toggleSidebar ? (
              " "
            ) : (
              <p className="primary-text-color dark:text-white">
                {user?.role} | রিজিওন:
                <span className="second-text-color dark:text-white">
                  {user?.country}{" "}
                </span>
              </p>
            )
          }
          avatarProps={{
            src: user?.profilePicture
              ? user?.profilePicture
              : "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            size: "lg",
          }}
        />
        <ul className="flex flex-col gap-4 pt-7">
          <DashboardNavItem
            Icon={RxDashboard}
            title={"হোম"}
            href={"/admin"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={HiUsers}
            title={"সকল ইউজার"}
            href={"/admin/allusers"}
            toggleSidebar={toggleSidebar}
          />

          <DashboardNavItem
            Icon={TbCategoryPlus}
            title={"ক্যাটেগরি "}
            href={"/admin/category"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={RiBook2Line}
            title={"সকল কোর্স"}
            href={"/admin/allCourses"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={PiStudentBold}
            title={" সকল ছাত্রছাত্রী "}
            href={"/admin/allStudentLists"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={GiTeacher}
            title={"সকল প্রশিক্ষক"}
            href={"/admin/allInstructor"}
            toggleSidebar={toggleSidebar}
          />
          {/*   <DashboardNavItem
            Icon={RiFoldersLine}
            title={"কুইজ ও অ্যাসাইনমেন্ট"}
            href={"/dashboard/quiz"}
            toggleSidebar={toggleSidebar}
          /> */}
          <DashboardNavItem
            Icon={TbPackages}
            title={"সাবস্ক্রিপশন"}
            href={"/admin/subscriptions"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={MdAssignmentAdd}
            title={"রিভিউ পোস্ট করুন"}
            href={"/admin/allReview"}
            toggleSidebar={toggleSidebar}
          />

          <DashboardNavItem
            Icon={FaUsers}
            title={"কাষ্টমার মেসেজ"}
            href={"/admin/customersMessage"}
            toggleSidebar={toggleSidebar}
          />

          <DashboardNavItem
            Icon={MdPayments}
            title={"পেমেন্ট হিস্টোরি"}
            href={"/admin/paymentHistory"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={MdOutlineUnsubscribe}
            title={"সাবস্ক্রাইবার"}
            href={"/admin/subscriber"}
            toggleSidebar={toggleSidebar}
          />
          <div onClick={openLandingPage}>
            <DashboardNavItem
              Icon={SiFrontendmentor}
              title={"ল্যান্ডিং পেইজ "}
              href={"javascript:void(0);"}
              toggleSidebar={toggleSidebar}
            />
          </div>

          {/* Landing page dropdown  menu starts from here. */}
          <div
            style={{
              maxHeight: openLgDropdown ? "500px" : "0px",
              transition: "all .5s ease",
              overflow: "hidden",
            }}
            className="ml-10 bg-slate-50 dark:bg-transparent"
          >
            <ul>
              <DashboardNavItem
                Icon={BsSliders2}
                title={"স্লাইডার পোস্ট করুন "}
                href={"/admin/landingPage"}
                toggleSidebar={toggleSidebar}
              />
              <DashboardNavItem
                Icon={MdWeb}
                title={"ফুটার আপডেট করুন "}
                href={"/admin/updateFooter"}
                toggleSidebar={toggleSidebar}
              />
              <DashboardNavItem
                Icon={RiFoldersLine}
                title={"Our Investor "}
                href={"/admin/ourInvestor"}
                toggleSidebar={toggleSidebar}
              />
              <DashboardNavItem
                Icon={RiFoldersLine}
                title={"Our Partner "}
                href={"/admin/ourPartner"}
                toggleSidebar={toggleSidebar}
              />
            </ul>
          </div>
        </ul>
      </div>
      {/* Profile */}

      <div className="border-t border-solid border-black/30 mt-3">
        <ul className="flex flex-col gap-4 pt-3">
          <DashboardNavItem
            Icon={TbUserCircle}
            title={"প্রোফাইল"}
            href={"/dashboard/profile"}
            toggleSidebar={toggleSidebar}
            isProfile={true}
          />
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
