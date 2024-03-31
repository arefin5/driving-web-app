"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCarSide } from "react-icons/fa6";
import { TbAlertTriangle } from "react-icons/tb";

const StartQuestionBase = () => {
  const router = useRouter();
  const [openModule, setOpenModule] = useState(false);
  const handleGoBack = () => {
    router.back(); // This will navigate one step back in the browser history
  };
  return (
    <div className="my-10 px-10 ">
      <div className="">
        <h2 className="text-blue-500 text-4xl border-b-4 border-solid border-blue-500">
          Question Base
        </h2>

        <div className="text-right mt-5">
          <button className="bg-primaryGradiant font-semibold text-2xl text-white px-5 py-3 uppercase rounded-lg inline-flex items-center gap-3">
            <TbAlertTriangle className="bg-yellow-500 text-3xl" /> Difficult
            Question
          </button>
        </div>

        <div className="flex flex-col items-center justify-center mt-20">
          <p
            className={`text-2xl font-semibold mb-5 ${
              openModule ? "block" : "hidden"
            }`}
          >
            Prawo Jazdi - kat.B1.B
          </p>
          <FaCarSide className="text-9xl " />
          <p
            className={`text-2xl font-semibold mb-5 ${
              openModule ? "hidden" : "block"
            }`}
          >
            Prawo Jazdi - kat.B1.B
          </p>
          <div
            className={`flex justify-around gap-6 items-center ${
              openModule ? "block" : "hidden"
            } mb-3`}
          >
            <h2 className="text-2xl">Module: </h2>
            <select
              className="w-[400px] border border-solid border-gray-500 px-4 py-3 rounded-md outline-0"
              name=""
              id=""
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <option key={item} value="volvo">
                  hello {item}
                </option>
              ))}
            </select>
          </div>
          {openModule ? (
            <Link
              href={"/dashboard/smartTest/questionBase/1245"}
              className="bg-primaryGradiant text-xl text-white px-20 py-2 mt-1 rounded-lg mb-3"
            >
              Start
            </Link>
          ) : (
            <button
              onClick={() => setOpenModule(true)}
              className="bg-primaryGradiant text-xl text-white px-20 py-2 mt-1 rounded-lg mb-3"
            >
              Start
            </button>
          )}
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

export default StartQuestionBase;
