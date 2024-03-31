"use client";
import { IoPlayCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import Image from "next/image";
import CoruseNavItem from "@/src/components/ui/features/CourseOverview/CoruseNavItem";
import CourseProgress from "@/src/components/ui/features/CourseOverview/CourseProgress";
import { useParams, usePathname } from "next/navigation";
import useGetDataHook from "@/src/Hooks/useGetDataHook";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CourseOverviewLayout = ({ children }) => {
  const router = useRouter();
  const { courseId } = useParams();
  const pathname = usePathname();
  const [course] = useGetDataHook(
    `https://backend.driveshikhun.com/api/v1/course/getCoursesById/${courseId}`
  );
  const [module] = useGetDataHook(
    `https://backend.driveshikhun.com/api/v1/module/specific?fieldName=courseId&&fieldValue=${courseId}`
  );
  const path = pathname.split("/")
 const  lessonId = path[path?.length-1];
console.log(lessonId)
const [l] = useGetDataHook(
  `https://backend.driveshikhun.com/api/v1/lesson/getLessonsById/${lessonId}`
);
const [allLesson] = useGetDataHook(
  `https://backend.driveshikhun.com/api/v1/lesson/specific?fieldName=moduleId&&fieldValue=${l?.moduleId}`
);


 const handelChange=(change)=>{
  const currentIndex = allLesson?.findIndex((item) => item?._id === lessonId);

  console.log(currentIndex, "curdent 72");
  if (change === "prev") {
    if (currentIndex > 0) {
      // setProduct(allLesson[currentIndex - 1]);
      router.push(`/courseOverview/${courseId}/${allLesson[currentIndex - 1]?._id}`);
    } else {
      toast.warning("This is the first Lesson!");
    }
  } else if (change === "next") {
    if (currentIndex < allLesson?.length - 1) {
      // setProduct(allLesson[currentIndex + 1]);
      router.push(`/courseOverview/${courseId}/${allLesson[currentIndex + 1]?._id}`);
    } else {
      toast.warning("This is the last Lesson!");
    }
  }
 }
  return (
    <section className="my-[50px] modal_scrollbar">
      {/* course title */}
      <div className="mb-10 container flex flex-col md:flex-row items-center gap-4">
        <h2 className="text-transparent  bg-loginButton bg-clip-text text-base md:text-xl lg:text-[30px] font-semibold">
          {course?.title}
        </h2>
        <p className="flex text-sm md:text-base items-center gap-2">
          {" "}
          <span className=" h-3 w-3 md:w-5 md:h-5 rounded-full inline-block bg-secondaryGradiant"></span>{" "}
          {course?.category}
        </p>
      </div>
      {/* main  */}
      <div className="flex flex-col lg:flex-row  max-h-fit justify-between overflow-hidden  scrollbar-hide container gap-5">
        {/* sidebar */}
        <div className="relative font-liador h-fit overflow-y-auto w-full lg:max-w-[413px]">
          <div
            className={`bg-[#F2F2F2] transition-all duration-300 p-6 relative h-[838px] overflow-y-auto  rounded-lg border border-solid border-black/30`}
          >
            <h4 className="text-2xl font-semibold primary-text-color mb-6 border-b border-solid border-[#CE2786]">
              কোর্স কনটেন্ট
            </h4>
            <ul className="flex flex-col gap-1">
              {module?.map((m) => (
                <CoruseNavItem
                  key={m?._id}
                  module={m}
                  CheckIcon={FaCheckCircle}
                  isUnlock={true}
                  Icon={IoPlayCircle}
                  title={m?.title}
                  href={m?._id}
                  course={course}
                />
              ))}
            </ul>
          </div>
        </div>
        {/* children */}
        <main className={`flex-1 `}>
          <CourseProgress />
          <div className=" xl:h-[56%] 2xl:h-[57%] overflow-y-auto scrollbar-hide ">
            {children}
          </div>
          <div className="py-5  relative font-liador p-6 border border-solid bg-[rgba(247,247,247,0.50)] rounded-lg mt-5 ">
            <Image
              src={userBg}
              width={77}
              height={80}
              alt=""
              className="absolute left-0 top-0 z-10"
            />
            <div className="flex flex-col lg:flex-row justify-between relative gap-2.5 lg:gap-0 z-50">
              <div className="">
                <button onClick={()=>handelChange("prev")} className="px-4 text-base w-full justify-center flex items-center gap-2 text-white font-semibold py-3 bg-primaryGradiant rounded">
                  <FaArrowLeft /> আগের টপিক
                </button>
              </div>
              {/* <div>
                <button className="px-4 text-base flex items-center gap-2 text-white font-semibold py-3 bg-[#B0B0B0] rounded w-full justify-center">
                  Mark As Complete
                  <FaRegCheckCircle />
                </button>
              </div> */}
              <div>
                <button onClick={()=>handelChange("next")} className="px-4 text-base w-full justify-center flex items-center gap-2 text-white font-semibold py-3 bg-primaryGradiant rounded">
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
    </section>
  );
};

export default CourseOverviewLayout;
