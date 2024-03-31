import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import Image from "next/image";
import AddCourseIcon from "/public/assets/Courses/courseDetails.svg";

import InputLabel from "../../../UserDashboard/UserProfile/InputLabel";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import { BiSolidEditAlt } from "react-icons/bi";
import EditCourse from "../EditCourse/EditCourse";
import { useDisclosure } from "@nextui-org/react";
const ViewCourseDetails = ({ isOpen, onOpenChange }) => {
  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();
  const handleUpdateCourse = (onClose) => {
    onOpenEdit();
    onClose();
  };
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6 block max-h-[400px] overflow-y-auto",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-white dark:bg-darkbg max-w-[950px] px-5 py-5 md:px-[90px] md:py-[50px] text-black dark:text-white",
          header: "p-0 py-10 border-[#292f46]",
          footer: "p-0 border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        className="font-liador"
      >
        <ModalContent className="relative modal_scrollbar">
          {(onClose) => (
            <>
              <Image
                src={userBg}
                width={90}
                height={90}
                alt=""
                className="absolute left-0 top-0 z-10"
              />
              <ModalHeader className="flex items-center gap-1">
                <div>
                  <Image
                    width={56}
                    height={56}
                    src={AddCourseIcon}
                    alt="Add course icon"
                  />
                </div>
                <div>
                  <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text dark:text-white">
                    কোর্স ডিটেইলস
                  </h2>
                </div>
              </ModalHeader>
              <ModalBody>
                <form>
                  {/* Course Title, enrollment start, enrollment end */}
                  <div className="flex gap-5 items-center justify-between">
                    <div className="basis-1/2 flex flex-col w-full gap-2 mb-3">
                      <InputLabel label={"কোর্স টাইটেল লিখুন"} />
                      <input
                        required
                        type="text"
                        placeholder="কোর্স টাইটেল লিখুন"
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      />
                    </div>

                    <div className="basis-1/4 flex flex-col w-full gap-2 mb-3 text-black/50">
                      <InputLabel label={"এনরোলমেন্ট শুরু"} />
                      <input
                        required
                        type="date"
                        placeholder="কোর্স টাইটেল লিখুন"
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 text-black/50 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      />
                    </div>
                    <div className=" basis-1/4 flex flex-col w-full gap-2 mb-3 text-black/50 dark:text-white">
                      <InputLabel label={"এনরোলমেন্ট শেষ"} />
                      <input
                        required
                        type="date"
                        placeholder="কোর্স টাইটেল লিখুন"
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 text-black/50 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      />
                    </div>
                  </div>
                  {/* category, Region, Subscription plan */}
                  <div className="flex gap-5 items-center justify-between">
                    <div className="flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="ক্যাটাগরি" />
                      <select
                        defaultValue="ক্যাটাগরি সিলেক্ট করুন"
                        className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                        name=""
                        id=""
                      >
                        <option
                          className="text-black/50 dark:text-white"
                          value="ক্যাটাগরি সিলেক্ট করুন"
                        >
                          ক্যাটাগরি সিলেক্ট করুন
                        </option>
                        <option value="bangladesh">Category one</option>
                        <option value="India">Category two</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 top-[40%]  flex items-center px-2 pointer-events-none">
                        <svg
                          className="fill-current h-4 w-4 text-black/30 dark:text-white border border-solid border-black/30 rounded-full leading-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12L5 7h10l-5 5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="রিজিওন" />
                      <select
                        defaultValue="রিজিওন সিলেক্ট করুন"
                        className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                        name=""
                        id=""
                      >
                        <option
                          className="text-black/50 dark:text-white"
                          value="রিজিওন সিলেক্ট করুন"
                        >
                          রিজিওন সিলেক্ট করুন
                        </option>
                        <option value="bangladesh">Region one</option>
                        <option value="India">Region two</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 top-[40%]  flex items-center px-2 pointer-events-none">
                        <svg
                          className="fill-current h-4 w-4 text-black/30 dark:text-white border border-solid border-black/30 rounded-full leading-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12L5 7h10l-5 5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="সাবস্ক্রিপশন প্লান নির্বাচন করুন " />
                      <select
                        defaultValue="প্রাইস সিস্টেম সিলেক্ট করুন"
                        className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                        name=""
                        id=""
                      >
                        <option
                          className="text-black/50 "
                          value="প্রাইস সিস্টেম সিলেক্ট করুন"
                        >
                          প্রাইস সিস্টেম সিলেক্ট করুন
                        </option>
                        <option value="bangladesh">Price one</option>
                        <option value="India">Price two</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 top-[40%]  flex items-center px-2 pointer-events-none">
                        <svg
                          className="fill-current h-4 w-4 text-black/30 dark:text-white border border-solid border-black/30 rounded-full leading-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12L5 7h10l-5 5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Thumbnile , course intro link*/}
                  <div className="flex gap-5 items-center justify-between">
                    <div className="flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="কোর্স থাম্বনেইল" />
                      <label
                        className="py-3 px-1 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white"
                        htmlFor="thumbnil"
                      >
                        <span className="bg-primaryGradiant py-1 px-[14px] inline-block text-xs font-semibold rounded text-white">
                          Choose File
                        </span>
                      </label>
                      <input
                        required
                        type="file"
                        id="thumbnil"
                        name="thumbnil"
                        className=" hidden"
                      />
                      <div className="absolute inset-y-0 right-0 top-[50%] dark:text-white flex items-center px-2 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="fill-current h-6 w-6 text-black/30  leading-4"
                        >
                          <path d="M5.5 8.5H6.5V6.4L7.3 7.2L8 6.5L6 4.5L4 6.5L4.7 7.2L5.5 6.4V8.5ZM2 10C1.725 10 1.48958 9.90208 1.29375 9.70625C1.09792 9.51042 1 9.275 1 9V3C1 2.725 1.09792 2.48958 1.29375 2.29375C1.48958 2.09792 1.725 2 2 2H5L6 3H10C10.275 3 10.5104 3.09792 10.7063 3.29375C10.9021 3.48958 11 3.725 11 4V9C11 9.275 10.9021 9.51042 10.7063 9.70625C10.5104 9.90208 10.275 10 10 10H2ZM2 9H10V4H5.5875L4.5875 3H2V9Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="কোর্স ইন্ট্রো ভিডিও লিংক" />
                      <input
                        required
                        type="text"
                        placeholder="ভিডিও লিংক"
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      />
                      <div className="absolute inset-y-0 right-0 top-[50%]  flex items-center px-2 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          classname="fill-current text-black/30 dark:text-white h-6 w-6  leading-4"
                        >
                          <path d="M8.5 10V8.5H7V7.5H8.5V6H9.5V7.5H11V8.5H9.5V10H8.5ZM5.5 8.5H3.5C2.80833 8.5 2.21875 8.25625 1.73125 7.76875C1.24375 7.28125 1 6.69167 1 6C1 5.30833 1.24375 4.71875 1.73125 4.23125C2.21875 3.74375 2.80833 3.5 3.5 3.5H5.5V4.5H3.5C3.08333 4.5 2.72917 4.64583 2.4375 4.9375C2.14583 5.22917 2 5.58333 2 6C2 6.41667 2.14583 6.77083 2.4375 7.0625C2.72917 7.35417 3.08333 7.5 3.5 7.5H5.5V8.5ZM4 6.5V5.5H8V6.5H4ZM11 6H10C10 5.58333 9.85417 5.22917 9.5625 4.9375C9.27083 4.64583 8.91667 4.5 8.5 4.5H6.5V3.5H8.5C9.19167 3.5 9.78125 3.74375 10.2688 4.23125C10.7563 4.71875 11 5.30833 11 6Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Course details */}
                  <div className="flex gap-5 items-center justify-between">
                    <div className="flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="কোর্স বিবরন" />

                      <textarea
                        name=""
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 text-black/50 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                        id=""
                        cols="20"
                        rows="5"
                        placeholder="এখান থেকে লিখা শুরু করুন"
                      ></textarea>
                    </div>
                  </div>
                  {/* Course information */}
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <InputLabel label="কোর্স এর ভিতরে যা যা থাকবে " />
                      <div className="bg-[#F2F2F2] rounded-lg mt-2 py-3 px-4 border border-solid border-black/30 ">
                        <p className="mb-3 text-xs text-black/50 font-light">
                          Add minimum 4 items
                        </p>
                        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0 "
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <InputLabel label="কোর্স এর সুবিধাসমূহ" />
                      <div className="bg-[#F2F2F2] mt-2 rounded-lg py-3 px-4 border border-solid border-black/30 ">
                        <p className="mb-3 text-xs text-black/50 font-light">
                          Add minimum 4 items
                        </p>
                        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                          <input
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name=""
                            id=""
                            placeholder="Type here..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={() => handleUpdateCourse(onClose)}
                  type="submit"
                  className="bg-primaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                >
                  Update Course Details
                  <BiSolidEditAlt size={24} />
                </button>
              </ModalFooter>
              <Image
                src={userBg2}
                width={90}
                height={90}
                alt=""
                className="absolute right-0 bottom-0"
              />
            </>
          )}
        </ModalContent>
      </Modal>
      {/* Edit course modal popup open */}
      <EditCourse isOpen={isOpenEdit} onOpenChange={onOpenChangeEdit} />
    </>
  );
};

export default ViewCourseDetails;
