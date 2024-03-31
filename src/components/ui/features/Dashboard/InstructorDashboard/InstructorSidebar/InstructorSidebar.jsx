"use client";
import { RxDashboard } from "react-icons/rx";
import { FaUserGroup } from "react-icons/fa6";
import { User } from "@nextui-org/user";
import DashboardNavItem from "../../Shared/DashboardNavItem";
import { RiBook2Line, RiVideoAddLine, RiFoldersLine } from "react-icons/ri";
import { TbUserCircle } from "react-icons/tb";
import { Image } from "@nextui-org/react";
import { MdQuiz, MdOutlineCircleNotifications } from "react-icons/md";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";

const InstructorSidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const { data: user } = useGetSingleUserData();
  return (
    <div className="relative font-liador">
      <div
        onClick={() => setToggleSidebar(!toggleSidebar)}
        className={`absolute hidden lg:inline-block  cursor-pointer top-7 z-50 ${
          toggleSidebar ? "-right-12" : "-right-5"
        }   bg-[#FBFBFB] border border-solid rounded-lg border-[rgba(198,47,143,0.30)] p-[7px]`}
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
          className="capitalize "
          size={50}
          classNames={{ name: "text-[#304996] dark:text-white text-base" }}
          name={` ${toggleSidebar ? "" : user?.name}`}
          description={
            toggleSidebar ? (
              ""
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
            // className:
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
            Icon={RiBook2Line}
            title={"Learn"}
            href={"/dashboard/learn"}
            toggleSidebar={toggleSidebar}
          />

          <DashboardNavItem
            Icon={RiBook2Line}
            title={" প্রশ্ন ভিত্তিক এবং পরীক্ষা"}
            href={"/dashboard/questionBaseExam"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={RiBook2Line}
            title={"কোর্সসমূহ"}
            href={"/dashboard/courses"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={RiVideoAddLine}
            title={"লাইভ ক্লাস"}
            href={"/dashboard/liveClassLists"}
            toggleSidebar={toggleSidebar}
          />

          <DashboardNavItem
            Icon={MdQuiz}
            title={"কুইজ ও অ্যাসাইনমেন্ট"}
            href={"/dashboard/addQuizAndAssestment"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={FaUserGroup}
            title={"স্টুডেন্ট লিস্ট"}
            href={"/dashboard/studentLists"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={RiFoldersLine}
            title={"রিসোর্স"}
            href={"/dashboard/addResources"}
            toggleSidebar={toggleSidebar}
          />
          <DashboardNavItem
            Icon={MdOutlineCircleNotifications}
            title={"নোটিশ প্যানেল"}
            href={"/dashboard/noticePanel"}
            toggleSidebar={toggleSidebar}
          />
        </ul>
      </div>
      {/* Profile */}

      <div className="border-t border-solid border-black/30 mt-3">
        <ul className="flex flex-col gap-4 pt-3">
          <DashboardNavItem
            Icon={TbUserCircle}
            title={"প্রোফাইল"}
            href={"/dashboard/instructorProfile"}
            toggleSidebar={toggleSidebar}
            isProfile={true}
          />
        </ul>
      </div>
    </div>
  );
};

export default InstructorSidebar;
