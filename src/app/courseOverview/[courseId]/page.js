"use client"
import Image from "next/image";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import { useParams } from "next/navigation";
import useGetDataHook from "@/src/Hooks/useGetDataHook";
const CouserOverview = () => {
  const {courseId} = useParams();
  const [course]= useGetDataHook(`https://backend.driveshikhun.com/api/v1/course/getCoursesById/${courseId}`)

  return (
    <div>
      <div className="py-5  relative font-liador p-6 border border-solid bg-[rgba(247,247,247,0.50)] rounded-lg mb-5">
        <Image
          src={userBg}
          width={100}
          height={100}
          alt=""
          className="absolute left-0 top-0 z-10"
        />
        <div className="space-y-3 text-base font-light">
          <h2 className="mb-3 primary-text-color text-2xl font-liador font-semibold">
            Course Overview
          </h2>
          {course?.courseDescription}
        </div>
        <Image
          src={userBg2}
          width={100}
          height={100}
          alt=""
          className="absolute right-0 bottom-0 z-10"
        />
      </div>
    </div>
  );
};

export default CouserOverview;
