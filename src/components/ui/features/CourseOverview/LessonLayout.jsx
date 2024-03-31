
import useGetDataHook from "@/src/Hooks/useGetDataHook";
import Link from "next/link";
import { usePathname } from "next/navigation";


const LessonLayout = ({ isUnlock, CheckIcon,  Icon,moduleId,courseId }) => {
  const pathname = usePathname();
  const [lesson]= useGetDataHook(`https://backend.driveshikhun.com/api/v1/lesson/specific?fieldName=moduleId&&fieldValue=${moduleId}`)


  return (
   <>
  {
    lesson?.map(l=>  <div key={l?._id}
      className={`navItem hover:text-white ${
        pathname ===  `/courseOverview/${courseId}/${l?._id}`
          ? "bg-primaryGradiant text-white"
          : "bg-[rgba(247,247,247,0.30)] shadow-md primary-text-color"
      }  py-3 px-4  rounded-lg mb-2`}
    >
      <Link
        href={`/courseOverview/${courseId}/${l?._id}`}
        className="flex gap-4 items-center text-xl font-semibold"
      >
        {isUnlock ? (
          <CheckIcon
            className={`${
              pathname === `/courseOverview/${courseId}/${l?._id}`
                ? "text-white"
                : "text-[#2B388F]"
            } `}
            size={24}
          />
        ) : (
          <Icon
            className={`${
              pathname === "dev" ? "text-white" : "text-[#2B388F]"
            } `}
            size={24}
          />
        )}
        {l?.title}
      </Link>
    </div>)
  }
   </>
  );
};

export default LessonLayout;
