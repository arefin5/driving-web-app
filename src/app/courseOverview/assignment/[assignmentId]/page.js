import Image from "next/image";
import Link from "next/link";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import { RxDashboard } from "react-icons/rx";
import LinkIcon from "/public/assets/CourseOverview/link.svg";
import assignment from "/public/assets/CourseOverview/assignment.svg";

const StartAssignment = () => {
  return (
    <div className="md:py-[66px] py-10  font-liador relative px-4 md:px-[30px] border border-solid bg-white  rounded-lg">
      <Image
        src={userBg}
        width={100}
        height={107}
        alt=""
        className="absolute left-0 top-0 z-10"
      />
      {/* top part */}
      <div className=" w-full flex justify-between mb-12  relative z-50">
        <div className="flex gap-3 items-start">
          <Image width={36} height={36} src={assignment} alt="" />
          <div>
            <h3 className="font-semibold text-[32px]  text-transparent bg-loginButton bg-clip-text">
              অ্যাসাইনমেন্ট -১
            </h3>
            <p className="text-base">
              সাবমিট করার শেষ সময় -{" "}
              <span className="text-[#FF0000]">শনি ১১ নভে রাত ১০:০০</span>
            </p>
          </div>
        </div>
      </div>
      {/* Assignment Marks */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-[rgba(247,247,247,0.50)] py-6  border border-solid border-black/30 rounded ">
        <h2 className="font-semibold text-2xl primary-text-color">
          মার্ক পেয়েছেন
        </h2>
        <h3 className=" bg-[#11A63C] py-2 px-5 rounded-lg text-white text-[32px]">
          ৪৯
        </h3>
        <p className="font-semibold text-xl ">৫০ এর মধ্যে</p>
      </div>
      {/* Upload file */}
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="bg-[rgba(247,247,247,0.50)] p-3 lg:px-[30px] lg:py-6 border border-solid border-[rgba(0,0,0,0.30)] rounded-lg">
          <p className="text-[rgba(17,166,60,0.59)] text-xl font-semibold mb-5">
            আপনার ফাইল আপলোড হয়েছে
          </p>
          {/* need to change div to form  */}
          <div>
            <div className="relative border w-full border-solid text-black/30  border-[#2B388F] pl-4 py-1 rounded">
              <label htmlFor="file" className=" text-[12px] ">
                Assignment - DriveShikhun.pdf
              </label>
              <input type="file" name="file" id="file" classname="hidden " />
              <button className="px-5 py-1 bg-[#C5C5C5] text-white rounded  absolute top-0 right-0 uppercase text-[12px] h-full font-semibold">
                upload
              </button>
            </div>
            <p className="text-[10px] text-black/50">
              * Insert your shareable file link
            </p>
          </div>
        </div>
        <div className="bg-[rgba(247,247,247,0.50)] p-3 lg:px-[30px] lg:py-6 border border-solid border-[rgba(0,0,0,0.30)] rounded-lg">
          <p className="text-[rgba(17,166,60,0.59)] text-xl font-semibold mb-5">
            আপনার ফাইল লিংক শেয়ার হয়েছে
          </p>
          {/* need to change div to form  */}
          <div>
            <div className="relative">
              <input
                className="border w-full border-solid text-black/30 text-[12px] border-[#2B388F] pl-4 py-1 rounded"
                type="text"
                placeholder="https://drive.google.com/file/d/...."
              />

              <div className="absolute top-1/2 -translate-y-1/2 right-4 uppercase text-[30px] font-semibold">
                <Image src={LinkIcon} alt="link" />
              </div>
            </div>
            <p className="text-[10px] text-black/50">
              * Insert your shareable file link
            </p>
          </div>
        </div>
      </div>
      <p className="text-center primary-text-color font-semibold mt-5">
        অ্যাসাইনমেন্ট এর বিস্তারিত দেখে নিন
      </p>

      {/* Button */}
      <Link href={"/dashboard"}>
        <button
          type="submit"
          className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
        >
          ড্যাশবোর্ড এ ফিরে যান <RxDashboard />
        </button>
      </Link>
      <Image
        src={userBg2}
        width={100}
        height={107}
        alt=""
        className="absolute right-0 bottom-0 z-10"
      />
    </div>
  );
};

export default StartAssignment;
