import StudentCard from "./StudentCard";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import Image from "next/image";

const RemovedStudents = () => {
  return (
    <div className="relative border border-solid border-black/30 rgba(247,247,247,0.50) rounded-lg py-6 px-8 h-[595px] !max-h-full overflow-y-auto scrollbar-hide">
      <Image
        src={userBg}
        width={90}
        height={90}
        alt=""
        className="absolute left-0 top-0 z-10"
      />
      <div className="">
        {/* Removed students */}
        <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4  pl-6">
          <h2 className="absolute top-20 text-[40px] second-text-color font-semibold -left-[100px] -rotate-90">
            বাতিল তালিকা
          </h2>
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
        </div>
      </div>
      <Image
        src={userBg2}
        width={90}
        height={90}
        alt=""
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};

export default RemovedStudents;
