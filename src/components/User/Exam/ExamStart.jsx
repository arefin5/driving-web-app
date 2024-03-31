"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCarSide } from "react-icons/fa6";
import { TbAlertTriangle } from "react-icons/tb";

const ExamStart = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); 
  };
  return (
    <div className="my-10 px-10 ">
      <div className="">
        <h2 className="text-blue-500 text-4xl border-b-4 border-solid border-blue-500">
          Exam
        </h2>
        <div className="text-right mt-5">
          <Link
            href={""}
            className="bg-primaryGradiant font-semibold text-2xl text-white px-5 py-3 uppercase rounded-lg inline-flex items-center gap-3"
          >
            <TbAlertTriangle className="bg-yellow-500 text-3xl" /> Difficult
            Question
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
          <FaCarSide className="text-9xl " />
          <p className="text-2xl font-semibold">Prawo Jazdi - kat.B1.B</p>
          <Link
            href={"/dashboard/smartTest/examBasicInfo"}
            className="bg-primaryGradiant text-xl text-white px-20 py-2 mt-1 rounded-lg mb-3"
          >
            Start
          </Link>
          <button
            onClick={handleGoBack}
            className="bg-primaryGradiant text-xl text-white px-4 py-3 rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamStart;
