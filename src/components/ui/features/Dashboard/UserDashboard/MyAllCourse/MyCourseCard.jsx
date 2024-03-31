import autoPlay from "/public/assets/dashboard/MyCourse/autoplay.svg";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "@nextui-org/react";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import useGetDataHook from "@/src/Hooks/useGetDataHook";
const MyCourseCard = ({course}) => {
  const [module]= useGetDataHook(`https://backend.driveshikhun.com/api/v1/module/specific?fieldName=courseId&&fieldValue=${course?._id}`)
 

  return (
    <div className="bg-[rgba(247,247,247,0.50)] dark:bg-darkbg  font-liador backdrop-blur-[3.5px] border border-solid border-black/30 py-[30px]  px-3 xl:px-6 rounded-lg">
      <Image
        src={userBg}
        width={70}
        height={70}
        alt=""
        className="absolute left-0 top-0 z-10 "
      />
      <div className="z-20 relative">
        <div>
          <Image
            className="rounded-lg w-full  h-36 object-cover"
            width={257}
            height={147}
            src={course?.courseThumbnail}
            alt={course?.title}
          />
        </div>
        <p className="second-text-color dark:text-white flex items-center gap-2 mt-3 mb-4">
          <span className=" inline-block w-5 h-5 rounded-full bg-secondaryGradiant"></span>{" "}
          {course?.category}
        </p>
        <h2 className="text-lg primary-text-color dark:text-white font-liador leading-7 font-semibold">
          {course?.title}
        </h2>
        <p className="second-text-color dark:text-white text-[12px] mb-2">
          {module?.length}টি লার্নিং মডিউল
        </p>
        <div className="flex justify-between mb-1">
          <div className="flex items-center gap-[7px]">
            <Image
              className="rounded-lg"
              width={24}
              height={24}
              src={autoPlay}
              alt=""
            />
            <p>
              <span className="primary-text-color dark:text-white">১২</span>{" "}
              <span className="second-text-color dark:text-white">
                / {module?.length}
              </span>
            </p>
          </div>
          <p className="primary-text-color dark:text-white">৯৩% কমপ্লিট</p>
        </div>
        <Progress
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-linearGradiant",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          aria-label="Loading..."
          value={93}
        />
        <div className="flex flex-wrap gap-3 xl:gap-0 xl:flex-nowrap items-center justify-between mt-4">
          <button className="py-3 px-5 w-full xl:w-auto text-white rounded bg-[#B9B9B9]">
            সার্টিফিকেট
          </button>
          <button className="py-3 px-5 w-full xl:w-auto text-white rounded bg-primaryGradiant">
            <Link href={`/courseOverview/${course?._id}`}>চালিয়ে যান</Link>
          </button>
        </div>
      </div>
      <Image
        src={userBg2}
        width={70}
        height={70}
        alt=""
        className="absolute right-0 bottom-0 z-10"
      />
    </div>
  );
};

export default MyCourseCard;
