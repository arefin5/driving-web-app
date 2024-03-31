import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import dollar from "/public/assets/dashboard/UserHome/dollar.svg";
import Image from "next/image";
const InstructorHomeCard = () => {
  return (
    <div className="py-[25px]  flex flex-col justify-center  rounded-lg items-center relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] backdrop-blur-[2.5px]">
      <div className="absolute w-1 h-[102px] rounded-sm bg-secondaryGradiant left-0 "></div>
      <Image
        src={userBg}
        width={70}
        height={70}
        alt=""
        className="absolute left-0 top-0 z-10"
      />
      <div className="text-center z-20">
        <Image src={dollar} width={70} height={70} alt="" className="mx-auto" />
        <p className="primary-text-color text-base ">টোটাল ব্যালেন্স</p>
        <p className="primary-text-color text-[28px] font-semibold">
          ৳ 1000.00
        </p>
      </div>
      <Image
        src={userBg2}
        width={70}
        height={70}
        alt=""
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};

export default InstructorHomeCard;
