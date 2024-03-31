import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BasicExamInfo = () => {
  return (
    <div className="ml-10 mr-5 p-10 my-10 shadow-xl rounded-lg bg-white">
      <h2 className="text-blue-500 text-4xl uppercase border-b-4 border-solid border-blue-500">
        Basic Exam Information
      </h2>
      <div className=" my-10 flex flex-col gap-3">
        {/* info */}
        <div className="flex items-center gap-2 text-2xl font-medium text-[#726d6d]">
          <MdKeyboardDoubleArrowRight />
          <p className="">
            Exam duration <span className="text-blue-500">25 minutes</span>
          </p>
        </div>
        <div className="flex items-start gap-2 text-2xl font-medium text-[#726d6d]">
          <MdKeyboardDoubleArrowRight />
          <p className="">It is a single choice test</p>
        </div>
        <div className="flex items-start gap-2 text-2xl font-medium text-[#726d6d]">
          <MdKeyboardDoubleArrowRight />
          <p className="">
            The questions have assigned weights i.e. score values depending on
            the significance of the question
          </p>
        </div>
        <div className="flex items-start gap-2 text-2xl font-medium text-[#726d6d]">
          <MdKeyboardDoubleArrowRight />
          <p className="">
            For answers{" "}
            <span className="text-blue-500">
              {" "}
              &quot;yes&quot; &quot; No&quot;{" "}
            </span>
            there are <span className="text-blue-500">20 seconds</span> to read
            the question and <span className="text-blue-500">15 seconds</span>{" "}
            give the answer
          </p>
        </div>
        <div className="flex items-start gap-2 text-2xl font-medium text-[#726d6d]">
          <MdKeyboardDoubleArrowRight />
          <p className="">
            For answers <span className="text-blue-500"> A, B , C , </span>
            there are <span className="text-blue-500">50 seconds</span>
            give the answer
          </p>
        </div>
        <div className="flex items-start gap-2 text-2xl font-medium text-[#726d6d]">
          <MdKeyboardDoubleArrowRight />
          <p className="">
            There is no posibility to return to answer question again
          </p>
        </div>
        <div className="flex items-start gap-2 text-2xl font-medium text-[#726d6d]">
          <MdKeyboardDoubleArrowRight />
          <p className="">
            The maximum number of points required{" "}
            <span className="text-blue-500">74</span>, to pass the exam is no
            less than <span className="text-blue-500">68 points</span>
          </p>
        </div>
        <div className="flex items-start gap-2 text-2xl font-medium text-[#726d6d]">
          <MdKeyboardDoubleArrowRight />
          <p className="">
            In order to begin the test click{" "}
            <span className="text-blue-500"> Start exam </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={"/dashboard/smartTest/examBasicInfo/exam/1245"}
          className="bg-primaryGradiant text-2xl inline-flex justify-center items-center text-white px-32 py-5 mt-1 rounded-lg mb-3"
        >
          Start
        </Link>{" "}
      </div>
    </div>
  );
};

export default BasicExamInfo;
