import studentImage from "/public/assets/Students/student.png";
import Image from "next/image";
import { FaListUl } from "react-icons/fa6";
import { Progress } from "@nextui-org/react";
import autoPlay from "/public/assets/dashboard/MyCourse/autoplay.svg";
import { FaUserMinus } from "react-icons/fa";
const StudentCard = () => {
  const isBest = true;
  return (
    <div className="relative">
      <div className="border border-solid border-black/30 rounded-lg ">
        <div
          className={` triangle ${
            isBest ? "triangle_primary" : "triangle_secondary"
          } text-white text-xl pl-1 pt-1 font-semibold rounded-tl-lg`}
        >
          ০১
        </div>
        <div className="text-center pt-6 p-3">
          <Image
            width={36}
            height={36}
            className="rounded-full mx-auto"
            src={studentImage}
            alt=" Student image"
          />
          <h2 className="text-xs font-semibold">Md. Atiqur Rahman</h2>
          <p className="bg-[#CE2786] rounded-[20px] text-white px-2 inline-block mx-auto text-[10px] items-center">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-white inline-block"></span>{" "}
              ক্যাটাগরি-বি
            </span>
          </p>
          <div className="flex justify-between mb-1">
            <div className="flex items-center gap-[7px]">
              <Image
                className="rounded-lg"
                width={16}
                height={16}
                src={autoPlay}
                alt=""
              />
              <p className="text-xs">
                <span className="primary-text-color dark:text-white ">১২</span>{" "}
                <span className="second-text-color dark:text-white">/ ১৩</span>
              </p>
            </div>
            <p className="primary-text-color text-xs dark:text-white">
              ৯৩% কমপ্লিট
            </p>
          </div>
          <Progress
            classNames={{
              base: "max-w-md",
              track: "drop-shadow-md border border-default",
              indicator: "bg-linearGradiant",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            aria-label="Loading..."
            value={93}
          />
          <button className="bg-[#D70034] mt-2  text-xs flex items-center w-full justify-center gap-1 rounded py-2 font-semibold text-white">
            Remove <FaUserMinus size={16} />
          </button>
        </div>
        <div className="absolute right-3 top-3">
          <FaListUl size={24} color="#2B388F" />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
