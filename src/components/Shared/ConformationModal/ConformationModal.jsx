import Image from "next/image";
import ConfrimModal from "/public/assets/shared/conformationModal.svg";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";

const ConformationModal = ({
  isOpen,
  onOpenChange,
  message = " আপনার কোর্সটি যোগ হয়েছে",
}) => {
  const handleConfrim = (onClose) => {
    onClose();
  };
  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius="lg"
      classNames={{
        body: "",
        backdrop: "bg-[#304996]/70 backdrop-opacity-40",
        base: "border-[#292f46] bg-white dark:bg-darkbg max-w-[950px] px-5 py-5 md:px-[90px] md:py-[50px] text-black dark:text-white",
        header: "p-0  border-[#292f46]",
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
              <h2 className=" text-2xl font-semibold second-text-color  ">
                অভিনন্দন!
              </h2>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-6  rounded-lg">
                <Image className="mx-auto" src={ConfrimModal} alt="" />
                <p className="text-center text-xl font-semibold primary-text-color dark:text-white">
                  {message}
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => handleConfrim(onClose)}
                className="w-full bg-secondaryGradiant text-white font-semibold  py-3 rounded"
              >
                এক্সপ্লোর করুন
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

    /*  */
  );
};

export default ConformationModal;
