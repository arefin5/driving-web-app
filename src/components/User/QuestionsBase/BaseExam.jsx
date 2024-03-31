import Link from "next/link";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaVideo,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const BaseExam = () => {
  return (
    <div className="ml-2 mr-2 p-4 my-10 shadow-xl rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  gap-5">
        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-5 pr-20">
            <div className="flex justify-between items-center ">
              <p>Point value</p>
              <button className="bg-blue-200  text-white rounded-md px-3 py-1">
                3
              </button>
            </div>
            <div className="flex justify-between items-center ">
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
            <p
           
              className="bg-primaryGradiant text-2xl inline-flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3"
            >
              Yes
            </p>
            <p
           
              className="bg-primaryGradiant text-2xl inline-flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3"
            >
              No
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <button className="bg-red-500 text-2xl relative flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3 w-full">
            <span className="text-center"> Finish Learning </span>
            <IoMdClose className="absolute top-3  end-3" />
          </button>
          <div className="flex justify-center mt-5 gap-5">
            <div className="text-center">
              <p className="text-xl font-medium text-center">
                {" "}
                Questions number
              </p>
              <p className="text-4xl text-blue-600 font-semibold">1/20</p>
            </div>
          </div>

          <div className=" mt-5 lg:mt-20">
            <button className="bg-primaryGradiant text-2xl relative flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3 w-full">
              <span className="text-center"> Show video </span>
              <FaVideo className="absolute top-3  end-3" />
            </button>
            <button className="bg-primaryGradiant text-2xl relative flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3 w-full">
              <span className="text-center"> Check answer </span>
            </button>
            <button className="bg-primaryGradiant text-2xl relative flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3 w-full">
              <span className="text-center"> Add to Difficult </span>
            </button>
          </div>
          {/* Next and prev button */}
          <div className=" mt-5 lg:mt-20">
            <button className="bg-primaryGradiant text-2xl relative flex justify-center items-center text-white px-3 py-2 mt-1 rounded-lg mb-3 w-full">
              <span className="text-center"> Previous question </span>
              <FaLongArrowAltLeft className="absolute top-3  start-3" />
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

export default BaseExam;
