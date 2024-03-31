import { IoPlayCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import CoruseNavItem from "./CoruseNavItem";
import CourseProgress from "./CourseProgress";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import Image from "next/image";

const CourseOverviewLayout = ({ children }) => {
  return (
    <div className="flex justify-between container py-[50px] gap-5">
      <div className="relative font-liador w-full md:w-[413px]">
        <div
          className={`bg-[#F2F2F2] transition-all duration-300 p-6 relative h-[838px] overflow-y-auto  rounded-lg border border-solid border-black/30`}
        >
          <h4 className="text-2xl font-semibold primary-text-color mb-6 border-b border-solid border-[#CE2786]">
            কোর্স কনটেন্ট
          </h4>
          <ul className="flex flex-col gap-4 ">
            <CoruseNavItem
              CheckIcon={FaCheckCircle}
              isUnlock={true}
              Icon={IoPlayCircle}
              title={"Course Overview"}
              href={"/courseOverview"}
            />
          </ul>
        </div>
      </div>
      <main className={`flex-1 flex flex-col`}>
        <div>
          <CourseProgress />
        </div>
        <div>{children}</div>
        <div className="py-5  relative font-liador p-6 border border-solid bg-[rgba(247,247,247,0.50)] rounded-lg mt-5 ">
          <Image
            src={userBg}
            width={77}
            height={80}
            alt=""
            className="absolute left-0 top-0 z-10"
          />
          <div className="flex justify-between relative z-50">
            <div>
              <button className="px-4 text-base flex items-center gap-2 text-white font-semibold py-3 bg-[#B0B0B0] rounded">
                <FaArrowLeft /> আগের টপিক
              </button>
            </div>
            <div>
              <button className="px-4 text-base flex items-center gap-2 text-white font-semibold py-3 bg-loginButton rounded">
                Mark As Complete
                <FaRegCheckCircle />
              </button>
            </div>
            <div>
              <button className="px-4 text-base flex items-center gap-2 text-white font-semibold py-3 bg-primaryGradiant rounded">
                পরবর্তী টপিক <FaArrowRight />
              </button>
            </div>
          </div>
          <Image
            src={userBg2}
            width={77}
            height={80}
            alt=""
            className="absolute right-0 bottom-0 z-10"
          />
        </div>
      </main>
    </div>
  );
};

export default CourseOverviewLayout;
