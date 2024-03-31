"use client";
import Autoplay from "/public/assets/dashboard/MyCourse/autoplay.svg";
import Image from "next/image";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import { Progress } from "@nextui-org/react";
const CourseProgress = () => {
  return (
    <div className="py-5  relative font-liador px-6 border border-solid bg-[rgba(247,247,247,0.50)] rounded-lg mb-5">
      <Image
        src={userBg}
        width={100}
        height={100}
        alt=""
        className="absolute left-0 top-0 z-10"
      />
      <div className="flex md:flex-row flex-col justify-between relative z-50 mb-6 ">
        <div className="flex md:flex-row flex-col gap-3 lg:gap-6 items-start lg:items-center border-b border-solid w-full md:max-w-[497px] border-[#CE2786] pb-3 lg:pb-0">
          <h3 className="text-2xl font-semibold primary-text-color">
            আপনার কোর্স প্রোগ্রেস
          </h3>
          <div className="flex items-center gap-3 lg:gap-6">
            <div className="flex gap-1 items-center">
              <Image src={Autoplay} alt="" />
              <p className="text-xl">
                <span className="primary-text-color">১২</span>{" "}
                <span className="second-text-color">/ ১৩</span>
              </p>
            </div>
            <p className="primary-text-color text-xl">৯৩% কমপ্লিট</p>
          </div>
          <Progress
            classNames={{
              base: "max-w-full",
              track: "drop-shadow-md border border-default",
              indicator: "bg-linearGradiant",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            aria-label="Loading..."
            value={93}
            className="block md:hidden"
          />
        </div>
        <div className=" mt-5 lg:mt-0">
          <button className="px-6 bg-[#B9B9B9] text-white py-3 rounded">
            সার্টিফিকেট
          </button>
        </div>
      </div>

      <Progress
        classNames={{
          base: "max-w-full",
          track: "drop-shadow-md border border-default",
          indicator: "bg-linearGradiant",
          label: "tracking-wider font-medium text-default-600",
          value: "text-foreground/60",
        }}
        aria-label="Loading..."
        value={93}
        className="hidden md:block"
      />

      <Image
        src={userBg2}
        width={100}
        height={100}
        alt=""
        className="absolute right-0 bottom-0 z-10"
      />
    </div>
  );
};

export default CourseProgress;
