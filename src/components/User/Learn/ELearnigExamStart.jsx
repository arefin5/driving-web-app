"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCarSide } from "react-icons/fa6";

const ELearnigExamStart = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // This will navigate one step back in the browser history
  };
  return (
    <div className="my-10 px-10 ">
      <div className="">
        <h2 className="text-blue-500 text-4xl border-b-4 border-solid border-blue-500">
          Exam
        </h2>

        <div className="flex flex-col items-center justify-center mt-20">
          <FaCarSide className="text-9xl " />
          <p className="text-2xl font-semibold">Prawo Jazdi - kat.B1.B</p>
          <div className="flex gap-3">
            <Link
              href={"/dashboard/smartTest/learn/elearning/elearningExam/123"}
              className="bg-primaryGradiant text-xl text-white px-20 py-2 mt-1 rounded-lg mb-3"
            >
              Start
            </Link>
            <Link
              href={"/dashboard/smartTest/learn/elearning/lessons"}
              className="bg-primaryGradiant text-xl text-white px-20 py-2 mt-1 rounded-lg mb-3"
            >
              Lesson
            </Link>
          </div>
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

export default ELearnigExamStart;
