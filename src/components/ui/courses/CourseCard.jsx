import courseOne from "/public/assets/courseSection/course1.png";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { MdPlayCircleOutline, MdAccountCircle } from "react-icons/md";
const CourseCard = () => {
  return (
    <div className="bg-[#F7F7F7]  dark:bg-darkbg  rounded-lg border border-black/30">
      <Image
        className="rounded-tr-lg rounded-tl-lg"
        src={courseOne}
        alt=""
        width={400}
        height={400}
      />
      <div className="px-4 py-2">
        <p className="flex items-center text-secondarySolid dark:text-white  text-xs">
          {" "}
          <GoDotFill className="text-secondarySolid dark:text-white " />{" "}
          ক্যাটাগরি-বি
        </p>
        <h2 className="text-base font-semibold primary-text-color mt-4 mb-5 dark:text-white ">
          1.1 সহজ ড্রাইভিং - ১০১টি অনুশীলন
        </h2>
        <div className="flex  justify-between items-center ">
          <p className="flex sm:text-sm lg:text-base items-center gap-1 lg:gap-2 second-text-color dark:text-white ">
            <MdPlayCircleOutline className="text-secondarySolid dark:text-white " />
            ৬৭২টি লেসন
          </p>
          <p className="flex sm:text-sm lg:text-base items-center gap-1 lg:gap-2 second-text-color dark:text-white ">
            <MdAccountCircle className="text-secondarySolid dark:text-white " />
            ৬৭জন এনরোল
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
