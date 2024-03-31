"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaGraduationCap } from "react-icons/fa6";


const Learn = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // This will navigate one step back in the browser history
  };
  return (
    <div className="mt-10 mx-20">
      <div className=" flex md:flex-row flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center ">
          <FaGraduationCap className="text-9xl my-5" />
          <Link
            href={"/dashboard/smartTest/learn/elearning"}
            className="bg-primaryGradiant text-xl text-white px-2 py-3 rounded-lg"
          >
            E - Learning
          </Link>
        </div>
        {/* <div className="flex flex-col items-center justify-center">
          <RiFileList3Fill className="text-9xl my-5" />
          <Link
            href={""}
            className="bg-primaryGradiant text-xl text-white px-2 py-3 rounded-lg"
          >
            Question Base
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <GoChecklist className="text-9xl my-5" />
          <Link
            href={"/dashboard/smartTest/smartExam"}
            className="bg-primaryGradiant text-xl text-white px-2 py-3 rounded-lg"
          >
            Exam
          </Link>
        </div> */}
      </div>
      {/* button group */}
      <div className="flex gap-3 items-center justify-center mt-10">
        <button
          onClick={handleGoBack}
          className="bg-primaryGradiant text-xl text-white px-4 py-3 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Learn;
