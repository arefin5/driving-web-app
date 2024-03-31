import Image from "next/image";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoMdPlayCircle, IoMdArrowDropdownCircle } from "react-icons/io";
import { MdPreview, MdOutlineLibraryAdd } from "react-icons/md";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";

const AddLesson = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div className="bg-[rgba(247,247,247,0.50)] dark:bg-darkbg border border-solid border-black/30 rounded-lg lg:p-10 p-4 relative z-10 font-liador">
      <Image
        src={userBg}
        width={70}
        height={70}
        alt=""
        className="absolute left-0 top-0 z-10"
      />
      <div className="">
        <Accordion
          className="px-0 font-liador !gap-4"
          variant="splitted"
          hideIndicator
          itemStyles={{}}
          itemClasses={{
            trigger: "p-0 text-base",
            base: "py-3 !gap-4  !px-4 border !rounded border-solid border-primarySolid !shadow-none",
            heading: "text-base ",

            title: "text-[#2B388F] font-liador ",
          }}
        >
          {arr.map((item) => (
            <AccordionItem
              classNames={{
                content: "",
              }}
              key={item}
              aria-label="Accordion 1"
              title={
                <div className="flex justify-between items-center">
                  <p className="primary-text-color dark:text-white sm:text-base text-sm">
                    Module 0: Introduction of Course{" "}
                    <span className="text-[#CE2786]">(Default)</span>
                  </p>
                  <div className="flex items-center gap-4 ">
                    <RiEdit2Line size={24} color="#2B388F" />
                    <RiDeleteBin6Line size={24} color="#2B388F" />
                    <IoMdArrowDropdownCircle size={24} color="#2B388F" />
                  </div>
                </div>
              }
            >
              <div>
                <div className="my-6">
                  <button className="bg-primarySolid text-white py-3 px-5 rounded flex items-center gap-[10px]">
                    Add Lesson <MdOutlineLibraryAdd size={24} />
                  </button>
                </div>
                <div className="flex items-center justify-between bg-[#F7F7F7] dark:bg-darkbg px-4 py-2 border border-solid border-black/30 rounded mb-3">
                  <p className="flex text-sm sm:text-base  items-center gap-2 primary-text-color font-semibold">
                    <IoMdPlayCircle size={24} className="text-[#9DA1A9]" />
                    0.0 Welcome to the Course
                  </p>
                  <div className="flex items-center gap-4 ">
                    <MdPreview size={24} color="#2B388F" />
                    <RiEdit2Line size={24} color="#2B388F" />
                    <RiDeleteBin6Line size={24} color="#2B388F" />
                  </div>
                </div>
                <div className="flex items-center justify-between bg-[#F7F7F7] px-4 py-2 border border-solid border-black/30 rounded  mb-3">
                  <p className="flex items-center gap-2 primary-text-color font-semibold">
                    <IoMdPlayCircle size={24} className="text-[#9DA1A9]" />
                    0.0 Welcome to the Course
                  </p>
                  <div className="flex items-center gap-4 ">
                    <MdPreview size={24} color="#2B388F" />
                    <RiEdit2Line size={24} color="#2B388F" />
                    <RiDeleteBin6Line size={24} color="#2B388F" />
                  </div>
                </div>
                <div className="flex items-center justify-between bg-[#F7F7F7] px-4 py-2 border border-solid border-black/30 rounded  mb-3">
                  <p className="flex items-center gap-2 primary-text-color font-semibold">
                    <IoMdPlayCircle size={24} className="text-[#9DA1A9]" />
                    0.0 Welcome to the Course
                  </p>
                  <div className="flex items-center gap-4 ">
                    <MdPreview size={24} color="#2B388F" />
                    <RiEdit2Line size={24} color="#2B388F" />
                    <RiDeleteBin6Line size={24} color="#2B388F" />
                  </div>
                </div>
                <div className="flex items-center justify-between bg-[#F7F7F7] px-4 py-2 border border-solid border-black/30 rounded">
                  <p className="flex items-center gap-2 primary-text-color font-semibold">
                    <IoMdPlayCircle size={24} className="text-[#9DA1A9]" />
                    0.0 Welcome to the Course
                  </p>
                  <div className="flex items-center gap-4 ">
                    <MdPreview size={24} color="#2B388F" />
                    <RiEdit2Line size={24} color="#2B388F" />
                    <RiDeleteBin6Line size={24} color="#2B388F" />
                  </div>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
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

export default AddLesson;
