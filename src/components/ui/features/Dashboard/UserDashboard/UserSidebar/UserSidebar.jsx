"use client";
import { RxDashboard } from "react-icons/rx";

import { User } from "@nextui-org/user";
import DashboardNavItem from "../../Shared/DashboardNavItem";
import {
  RiBook2Line,
  RiVideoAddLine,
  RiMovieLine,
  RiFoldersLine,
} from "react-icons/ri";
import { TbUserCircle } from "react-icons/tb";
import { Image } from "@nextui-org/react";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import { FaUserGraduate } from "react-icons/fa";

const UserSidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const { data: user } = useGetSingleUserData();
  return (
    <div className="relative  font-liador">
      <div
        onClick={() => setToggleSidebar(!toggleSidebar)}
        className={`absolute  hidden lg:inline-block  cursor-pointer top-7 z-50 ${
          toggleSidebar ? "-right-12" : "-right-5"
        }   bg-[#FBFBFB] dark:bg-darkbg dark:border-white border border-solid rounded-lg border-[rgba(198,47,143,0.30)] p-[7px]`}
      >
        <Image
          width={48}
          height={48}
          className="max-w-full h-full opacity-100"
          alt="arrow-left-circle"
          src={`${
            toggleSidebar
              ? "/assets/dashboard/arrow-left-circle.svg"
              : "/assets/dashboard/arrow-right-circle.svg"
          }`}
        />
      </div>
      <div
        className={`bg-[#F2F2F2] dark:bg-darkbg  transition-all duration-300 ${
          toggleSidebar ? "w-[100px]" : "w-full lg:w-[305px]"
        } py-8 px-6 relative `}
      >
        <User
          className="capitalize"
          // className="w-12 h-12"
          size={50}
          name={` ${toggleSidebar ? "" : user?.name}`}
          description={
            toggleSidebar ? (
              " "
            ) : (
              <p className="primary-text-color dark:text-white">
                {user?.role} | রিজিওন:{" "}
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
            href={"/dashboard"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={FaUserGraduate}
            title={"Smart Test"}
            href={"/dashboard/smartTest"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={RiBook2Line}
            title={"আমার কোর্স"}
            href={"/dashboard/myCourse"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={RiVideoAddLine}
            title={"লাইভ ক্লাস"}
            href={"/dashboard/liveClass"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={RiMovieLine}
            title={"রেকর্ডিং"}
            href={"/dashboard/recording"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={RiFoldersLine}
            title={"কুইজ ও অ্যাসাইনমেন্ট"}
            href={"/dashboard/quiz"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={RiFoldersLine}
            title={"রিসোর্স"}
            href={"/dashboard/resources"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={RiFoldersLine}
            title={"লীডারবোর্ড"}
            href={"/dashboard/leaderBoard"}
            toggleSidebar={toggleSidebar}
          />
        </ul>
      </div>
      {/* Profile */}
      <div className="border-t border-solid border-black/30 mt-3">
        <ul className="flex flex-col gap-4 pt-3 ">
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

export default UserSidebar;
