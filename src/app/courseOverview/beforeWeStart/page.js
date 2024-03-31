import Image from "next/image";

import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import Thumbunil from "/public/assets/CourseOverview/courseThumb.png";

const BeforeWeStartPage = () => {
  return (
    <div>
      <div className="py-5  relative font-liador p-6 border border-solid bg-[rgba(247,247,247,0.50)] rounded-lg mb-5">
        <Image
          src={userBg}
          width={100}
          height={100}
          alt=""
          className="absolute left-0 top-0 z-10"
        />
        <div>
          <h2 className="mb-6 primary-text-color text-2xl font-liador font-semibold">
            0.2 Before We Start
          </h2>
          <Image className="mx-auto" src={Thumbunil} alt="" />
        </div>
        <Image
          src={userBg2}
          width={100}
          height={100}
          alt=""
          className="absolute right-0 bottom-0 z-10"
        />
      </div>
    </div>
  );
};

export default BeforeWeStartPage;
