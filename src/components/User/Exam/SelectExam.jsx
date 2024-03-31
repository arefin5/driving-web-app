import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { RiFileList3Fill } from "react-icons/ri";

const SelectExam = () => {
  return (
    <div className="mt-10 mx-20">
      <div className=" flex md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col items-center justify-center">
          <FaGraduationCap className="text-9xl my-5" />
          <Link
            href={"/dashboard/smartTest/learn"}
            className="bg-primaryGradiant text-xl text-white px-2 py-3 rounded-lg"
          >
            Learn
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <RiFileList3Fill className="text-9xl my-5" />
          <Link
            href={"/dashboard/smartTest/questionBase"}
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
        </div>
      </div>
      {/* button group */}
      <div className="flex gap-3 items-center justify-center mt-32">
        <p
         
          className="bg-primaryGradiant text-xl text-white px-4 py-3 rounded-lg"
        >
          Edit
        </p>
        <p
       
          className="bg-primaryGradiant capitalize text-xl text-white px-4 py-3 rounded-lg"
        >
          Pick category
        </p>
        <p
    
          className="bg-primaryGradiant capitalize text-xl text-white px-4 py-3 rounded-lg"
        >
          Show Payments
        </p>
      </div>
    </div>
  );
};

export default SelectExam;
