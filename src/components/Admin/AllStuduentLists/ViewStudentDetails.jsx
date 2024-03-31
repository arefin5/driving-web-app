import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import Image from "next/image";
import DummyAvatar from "/public/assets/Profile/camera.svg";
const ViewStudentDetails = ({ isOpen, onOpenChange, userDetails }) => {
  console.log(userDetails);
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
          base: "border-[#292f46] bg-white max-w-[950px] px-5 py-5 md:px-[90px] md:py-[50px] text-black",
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
              <ModalHeader className="flex items-center gap-3 pb-2">
                <div>
                  {/*  <Image
                    width={56}
                    height={56}
                    src={NotificationIcon}
                    alt="Add quiz icon"
                  /> */}
                </div>
                <div>
                  <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text">
                    {userDetails?.name} ডিটেইলস
                  </h2>
                </div>
              </ModalHeader>
              <ModalBody>
                <div>
                  <div className="center flex flex-col items-center mb-4 justify-center gap-3">
                    <label className="relative">
                      <Image
                        src={
                          userDetails?.profilePic
                            ? userDetails?.profilePic
                            : DummyAvatar
                        }
                        width={100}
                        height={100}
                        alt="user avatar"
                        className="rounded-full w-[100px] h-[100px] object-cover"
                      />
                    </label>
                  </div>
                  <div>
                    {/* Name */}
                    <div className="flex flex-col w-full gap-2 mb-3">
                      <span className="text-base font-semibold primary-text-color">
                        নাম
                      </span>
                      <p className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px]">
                        {userDetails?.name}
                      </p>
                    </div>
                    {/* Select countery */}
                    <div className="flex flex-col w-full gap-2 mb-3 relative">
                      <span className="text-base font-semibold primary-text-color">
                        দেশ
                      </span>
                      <p className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px]">
                        {userDetails?.country}
                      </p>
                    </div>
                    {/* select female or male */}
                    <div className="">
                      <span className="text-base font-semibold primary-text-color">
                        female
                      </span>
                      <p className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px]">
                        {userDetails?.gender}
                      </p>
                    </div>
                    <div className="flex gap-[34px] mt-3">
                      {/* data of birth */}
                      <div className="flex flex-col w-full gap-2 mb-3">
                        <span className="text-base font-semibold primary-text-color">
                          জন্ম তারিখ
                        </span>
                        <p className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px]">
                          {userDetails?.dateOfBirth}
                        </p>
                      </div>
                      <div className="flex flex-col w-full gap-2 mb-3 relative">
                        <span className="text-base font-semibold primary-text-color">
                          ভাষা
                        </span>
                        <p className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px]">
                          {userDetails?.language
                            ? userDetails?.language
                            : "NO language update"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={() => onClose()}
                  type="submit"
                  className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                >
                  Close
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
    </>
  );
};

export default ViewStudentDetails;
