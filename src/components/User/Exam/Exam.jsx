"use client";

import { Progress } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLongArrowAltRight, FaVideo } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuClock2 } from "react-icons/lu";

const Exam = () => {
  const [value, setValue] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        if (v <= 0) {
          clearInterval(interval);
          return 0;
        }
        return v - 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="ml-2 mr-2 p-4 my-10 shadow-xl rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  gap-5">
        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-5">
            <div className="flex justify-between items-center col-span-3">
              <p>Time untill exam end</p>
              <button className="bg-blue-200  text-white rounded-md px-3 py-1">
                24:58
              </button>
            </div>
            <div className="flex justify-between items-center col-span-2">
              <p>Point value</p>
              <button className="bg-blue-200  text-white rounded-md px-3 py-1">
                3
              </button>
            </div>
            <div className="flex justify-between items-center col-span-2">
              <p>Category</p>
              <button className="bg-blue-200  text-white rounded-md px-3 py-1">
                B
              </button>
            </div>
          </div>
          {/* video */}
          <div className="h-96 rounded-lg bg-slate-300 w-full"> </div>
          <p className="mb-5 text-xl">
            Does this sign warn of the posibility of ice on the roadWay?
          </p>
          {/* answer yes no */}
          <div className="flex justify-around">
            <Link
              href={""}
              className="bg-primaryGradiant text-2xl inline-flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3"
            >
              Yes
            </Link>
            <Link
              href={""}
              className="bg-primaryGradiant text-2xl inline-flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3"
            >
              No
            </Link>
          </div>
        </div>
        <div className="col-span-2">
          <button className="bg-red-500 text-2xl relative flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3 w-full">
            <span className="text-center"> End exam </span>
            <IoMdClose className="absolute top-3  end-3" />
          </button>
          <div className="flex justify-between mt-5 gap-5">
            <div>
              <p className="text-2xl font-medium">Basic Questions</p>
              <p className="text-3xl text-blue-600 font-semibold">1/20</p>
            </div>
            <div>
              <p className="text-2xl font-medium">Specialized Questions</p>
              <p className="text-3xl text-blue-600 font-semibold">0/12</p>
            </div>
          </div>
          <p className="uppercase text-slate-600 font-semibold text-3xl my-3">
            {" "}
            time to read this question
          </p>
          <Progress
            aria-label="Downloading..."
            size="lg"
            value={value}
            color="success"
            // showValueLabel={true}
            className="max-w-md"
          />
          <p className="text-slate-600 text-xl flex gap-2 items-center">
            <LuClock2 /> {value}s
          </p>
          <div className=" mt-5 lg:mt-32">
            <button className="bg-primaryGradiant text-2xl relative flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3 w-full">
              <span className="text-center"> Show video </span>
              <FaVideo className="absolute top-3  end-3" />
            </button>
            <Link
              href={"/dashboard/smartTest/examBasicInfo/exam/1245"}
              className="bg-primaryGradiant text-2xl relative flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3 w-full"
            >
              <span className="text-center"> Next questions </span>
              <FaLongArrowAltRight className="absolute top-3  end-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
