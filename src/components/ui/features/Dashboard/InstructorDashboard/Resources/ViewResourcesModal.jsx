import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import ResourcesIcon from "/public/assets/Resources/Resources.svg";

import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";

import LinkIcon from "/public/assets/CourseOverview/link.svg";
import InputLabel from "../../UserDashboard/UserProfile/InputLabel";
import { BiSolidEditAlt } from "react-icons/bi";
import EditResourcesModal from "./EditResourcesModal";
const ViewResourcesModal = ({ isOpen, onOpenChange }) => {
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
                    width={56}
                    height={56}
                    src={ResourcesIcon}
                    alt="Add quiz icon"
                  />
                </div>
                <div>
                  <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text dark:text-white">
                    রিসোর্স
                  </h2>
                </div>
              </ModalHeader>
              <ModalBody>
                <form>
                  {/* Course Title, enrollment start, */}
                  <div className="flex gap-5 items-center justify-between">
                    <div className="basis-1/2 flex flex-col w-full gap-2 mb-3">
                      <InputLabel label={"রিসোর্স টাইটেল"} />
                      <input
                        required
                        type="text"
                        placeholder="রিসোর্স এর নাম লিখুন..."
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      />
                    </div>

                    <div className="flex  basis-1/2  gap-5 items-center justify-between">
                      <div className="flex flex-col w-full gap-2 mb-3 relative">
                        <InputLabel label="রিসোর্স এর কোর্স সিলেক্ট করুন" />
                        <select
                          defaultValue="কোর্স সিলেক্ট করুন..."
                          className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50 dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                          name=""
                          id=""
                        >
                          <option
                            className="text-black/50 dark:text-white"
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
                    </div>
                  </div>
                  {/* category, Region,  link*/}
                  <div className="flex gap-5 items-center justify-between ">
                    <div className="basis-1/2">
                      <InputLabel label={"রিসোর্স ফাইল আপলোড করুন "} />
                      <div className="relative border mt-2 w-full border-solid text-black/30 dark:text-white border-[#2B388F] pl-4 py-1 rounded">
                        <label htmlFor="file" className=" text-[12px] ">
                          Drop or Upload your file...
                        </label>
                        <input
                          type="file"
                          name="file"
                          id="file"
                          classname="hidden "
                        />
                        <button className="px-5 py-1 border bg-primaryGradiant text-white rounded border-solid border-[#2B388F] absolute top-0 right-0 h-full uppercase text-[12px] font-semibold">
                          upload
                        </button>
                      </div>
                      <p className="text-[10px] text-black/50 dark:text-white">
                        * Insert your shareable file link
                      </p>
                    </div>
                    <div className=" basis-1/2 ">
                      <InputLabel label={"রিসোর্স ফাইল লিংক শেয়ার করুন "} />
                      <div className="relative mt-2">
                        <input
                          className="border w-full border-solid text-black/30 dark:text-white text-[12px] border-[#2B388F] pl-4 py-3 rounded dark:placeholder:text-white dark:bg-transparent dark:border-white "
                          type="text"
                          placeholder="Share your file link..."
                        />

                        <div className="absolute top-1/2 -translate-y-1/2 right-4 uppercase text-[30px] font-semibold">
                          <Image src={LinkIcon} alt="link" />
                        </div>
                      </div>
                      <p className="text-[10px] text-black/50 dark:text-white">
                        * Insert your shareable file link
                      </p>
                    </div>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={() => handleConfrimModal(onClose)}
                  type="submit"
                  className="bg-primaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                >
                  Update Resource
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
      {/* Edit Modal */}
      <EditResourcesModal
        isOpen={isOpenEditModal}
        onOpenChange={onOpenChangeEditModal}
      />
    </>
  );
};

export default ViewResourcesModal;
