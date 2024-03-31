"use client";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import { Progress } from "@nextui-org/react";
import QA3 from "/public/assets/CourseOverview/qa3.svg";
import clock2 from "/public/assets/CourseOverview/clock2.svg";
import { useState } from "react";

const QuizStart = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    const newValue = +event.target.value;
    setSelectedOption(newValue);
  };
  return (
    <div className="py-[66px] font-liador relative px-6 md:px-12 xl:px-[100px] border border-solid bg-white  rounded-lg">
      <Image
        src={userBg}
        width={150}
        height={160}
        alt=""
        className="absolute left-0 top-0 z-10"
      />
      {/* top part */}
      <div className=" w-full flex justify-between  relative z-50">
        <div className="flex md:flex-row flex-col gap-3">
          <Image width={50} height={50} src={QA3} alt="" />
          <div>
            <h3 className="font-semibold text-2xl  primary-text-color">
              কুইজ - ১
            </h3>
            <p className="text-[12px]">শনি ১১ নভে রাত ১০:০০</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-3">
          <Image width={50} height={50} src={clock2} alt="" />
          <div>
            <p>সময় বাকি</p>
            <h3 className="font-semibold text-2xl primary-text-color ">
              <span className="second-text-color">১৯:৫৯</span> মিনিট
            </h3>
          </div>
        </div>
      </div>
      {/* progress bar */}
      <div className="mb-[50px] mt-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-base font-semibold">
            <span className="primary-text-color">প্রশ্ন</span>{" "}
            <span className="second-text-color">০১</span>
          </p>
          <p className="text-2xl font-semibold">
            <span className="primary-text-color">প্রোগ্রেস</span>{" "}
            <span className="second-text-color">১০%</span>
          </p>
          <p className=" font-semibold">
            <span className="primary-text-color">বাকি </span>{" "}
            <span className="second-text-color">০৯টি</span>
          </p>
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
          value={30}
        />
      </div>
      {/* Qus and ans */}
      <div>
        <h3 className="text-black text-xl mb-10">
          <span className="second-text-color text-[32px]">১.</span> ব্রেক
          মাষ্টার সিলিন্ডারে ব্রেক ওয়েল লেভেল কম থাকলে কী হতে পারে?
        </h3>
        {/* Input from */}
        <from className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <label
            className={` border border-solid ${
              selectedOption === 1
                ? "border-[#C62F8F] border-2 bg-[#F5F5F5]"
                : "border-black/30 bg-[#F7F7F7]"
            } py-2 px-2 lg:px-6 rounded-lg cursor-pointer`}
          >
            <input
              type="radio"
              name={"selectAns"}
              value={1}
              checked={selectedOption === 1}
              onChange={handleRadioChange}
              className="hidden"
            />
            <h2 className="flex items-center gap-2 lg:gap-4  text-base lg:text-xl">
              <span
                className={` ${
                  selectedOption === 1
                    ? "bg-primaryGradiant text-white"
                    : "bg-[#EAECF0]"
                } inline-block text-center w-8  h-8 rounded-full leading-8 `}
              >
                1
              </span>
              ব্রেক ফেইল
            </h2>
          </label>
          <label
            className={` border border-solid ${
              selectedOption === 2
                ? "border-[#C62F8F] border-2 bg-[#F5F5F5]"
                : "border-black/30 bg-[#F7F7F7]"
            } py-2 px-2 lg:px-6 rounded-lg cursor-pointer`}
          >
            <input
              type="radio"
              name={"selectAns"}
              value={2}
              checked={selectedOption === 2}
              onChange={handleRadioChange}
              className="hidden"
            />
            <h2 className="flex items-center gap-2 lg:gap-4  text-base lg:text-xl">
              <span
                className={` ${
                  selectedOption === 2
                    ? "bg-primaryGradiant text-white"
                    : "bg-[#EAECF0]"
                } inline-block text-center w-8  h-8 rounded-full leading-8 `}
              >
                2
              </span>
              ব্রেক ফেইল
            </h2>
          </label>
          <label
            className={` border border-solid ${
              selectedOption === 3
                ? "border-[#C62F8F] border-2 bg-[#F5F5F5]"
                : "border-black/30 bg-[#F7F7F7]"
            } py-2  px-2 lg:px-6 rounded-lg cursor-pointer`}
          >
            <input
              type="radio"
              name={"selectAns"}
              value={3}
              checked={selectedOption === 3}
              onChange={handleRadioChange}
              className="hidden"
            />
            <h2 className="flex items-center gap-2 lg:gap-4  text-base lg:text-xl">
              <span
                className={` ${
                  selectedOption === 3
                    ? "bg-primaryGradiant text-white"
                    : "bg-[#EAECF0]"
                } inline-block text-center w-8  h-8 rounded-full leading-8 `}
              >
                3
              </span>
              কালো ধোয়া
            </h2>
          </label>
          <label
            className={` border border-solid ${
              selectedOption === 4
                ? "border-[#C62F8F] border-2 bg-[#F5F5F5]"
                : "border-black/30 bg-[#F7F7F7]"
            } py-2  px-2 lg:px-6 rounded-lg cursor-pointer`}
          >
            <input
              type="radio"
              name={"selectAns"}
              value={4}
              checked={selectedOption === 4}
              onChange={handleRadioChange}
              className="hidden"
            />
            <h2 className="flex items-center gap-2 lg:gap-4  text-base lg:text-xl">
              <span
                className={` ${
                  selectedOption === 4
                    ? "bg-primaryGradiant text-white"
                    : "bg-[#EAECF0]"
                } inline-block text-center w-8  h-8 rounded-full leading-8 `}
              >
                4
              </span>
              বিকট আওয়াজ
            </h2>
          </label>
        </from>
      </div>
      {/* Next prev button */}
      <div className="flex flex-col md:flex-row justify-between w-full">
        <Link className="block" href={"/quiz/01quiz"}>
          <button
            type="submit"
            className="bg-[#B3B3B3] justify-center gap-[10px]  mt-6  py-3 px-8 rounded text-white font-semibold flex items-center w-full"
          >
            পূর্ববর্তী প্রশ্ন
            <IoArrowForwardSharp />
          </button>
        </Link>
        <Link className=" block " href={"/quiz/01quiz"}>
          <button
            type="submit"
            className="bg-secondaryGradiant justify-center gap-[10px]  mt-6  py-3 px-8 rounded text-white font-semibold flex items-center w-full"
          >
            পরবর্তী প্রশ্ন
            <IoArrowForwardSharp />
          </button>
        </Link>
      </div>
      <Image
        src={userBg2}
        width={150}
        height={160}
        alt=""
        className="absolute right-0 bottom-0 z-10"
      />
    </div>
  );
};

export default QuizStart;
