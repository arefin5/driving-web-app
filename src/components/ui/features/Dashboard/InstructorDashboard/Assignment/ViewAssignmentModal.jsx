import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import AssignmentIcon from "/public/assets/Courses/assignmentIcon.svg";

import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";

import InputLabel from "../../UserDashboard/UserProfile/InputLabel";
import { BiSolidEditAlt } from "react-icons/bi";
import EditAssignmentModal from "./EditAssignmentModal";
const ViewAssignmentModal = ({ isOpen, onOpenChange }) => {
  const {
    onOpen: onOpenEditModal,
    isOpen: isOpenEditModal,
    onOpenChange: onOpenChangeEditModal,
  } = useDisclosure();
  const handleConfrimModal = (onClose) => {
    onClose();
    onOpenEditModal();
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
              <ModalHeader className="flex items-center gap-3">
                <div>
                  <Image
                    width={36}
                    height={36}
                    src={AssignmentIcon}
                    alt="Add quiz icon"
                  />
                </div>
                <div>
                  <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text dark:text-white">
                    অ্যাসাইনমেন্ট ডিটেইলস
                  </h2>
                </div>
              </ModalHeader>
              <ModalBody>
                <form>
                  {/* Course Title, enrollment start, enrollment end */}
                  <div className="flex gap-5 items-center justify-between">
                    <div className="basis-1/2 flex flex-col w-full gap-2 mb-3">
                      <InputLabel label={"অ্যাসাইনমেন্ট টাইটেল "} />
                      <input
                        required
                        type="text"
                        placeholder="অ্যাসাইনমেন্ট টাইটেল লিখুন..."
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      />
                    </div>

                    <div className="basis-1/4 flex flex-col w-full gap-2 mb-3 text-black/50">
                      <InputLabel label={"সাবমিটের শেষ তারিখ"} />
                      <input
                        required
                        type="date"
                        placeholder="কোর্স টাইটেল লিখুন"
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 text-black/50 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      />
                    </div>
                    <div className=" basis-1/4 flex flex-col w-full gap-2 mb-3 text-black/50">
                      <InputLabel label={"সাবমিটের শেষ সময়"} />
                      <input
                        required
                        type="text"
                        placeholder="HH : MM"
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 text-black/50 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      />
                    </div>
                  </div>
                  {/* category, Region,  */}
                  <div className="flex gap-5 items-center justify-between">
                    <div className=" basis-3/5 flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="অ্যাসাইনমেন্ট এর কোর্স সিলেক্ট করুন" />
                      <select
                        defaultValue={"কোর্স সিলেক্ট করুন..."}
                        className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                        name=""
                        id=""
                      >
                        <option
                          className="text-black/50 "
                          value="কোর্স সিলেক্ট করুন..."
                        >
                          কোর্স সিলেক্ট করুন...
                        </option>
                        <option value="bangladesh">Course one</option>
                        <option value="India">Course two</option>
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
                    <div className=" basis-2/5 flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="মডিউল সিলেক্ট করুন" />
                      <select
                        defaultValue={"মডিউল সিলেক্ট করুন..."}
                        className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                        name=""
                        id=""
                      >
                        <option
                          className="text-black/50 dark:text-white"
                          value="মডিউল সিলেক্ট করুন..."
                        >
                          মডিউল সিলেক্ট করুন
                        </option>
                        <option value="bangladesh">Module one</option>
                        <option value="India">Module two</option>
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
                  {/* Assignment subj, Marks,  */}
                  <div className="flex gap-5 items-center justify-between">
                    <div className=" basis-4/5 flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="অ্যাসাইনমেন্ট এর বিষয়" />
                      <input
                        required
                        type="text"
                        placeholder="এখানে বিষয় লিখুন..."
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      />
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
                    <div className=" basis-1/5 flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="মার্কস" />
                      <input
                        required
                        type="text"
                        placeholder="০-১০০"
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      />
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
                  {/* Assignment Details */}
                  <div className="flex gap-2 flex-col ">
                    <InputLabel label="অ্যাসাইনমেন্ট বিস্তারিত ও নিয়মাবলী" />
                    <textarea
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="এখানে লিখুন..."
                    ></textarea>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={() => handleConfrimModal(onClose)}
                  type="submit"
                  className="bg-primaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                >
                  Update Assignment
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
      {/* Handle open modal */}
      <EditAssignmentModal
        isOpen={isOpenEditModal}
        onOpenChange={onOpenChangeEditModal}
      />
    </>
  );
};

export default ViewAssignmentModal;
