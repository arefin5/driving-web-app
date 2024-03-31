import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import UpdateCategoryModal from "./UpdateCategoryModal";
import InputLabel from "../../ui/features/Dashboard/UserDashboard/UserProfile/InputLabel";

const PreviewCategoryModal = ({ isOpen, onOpenChange, categoryById }) => {
  const { description, name } = categoryById || {};

  const {
    onOpen: onOpenEditCateModal,
    isOpen: isOpenEditCateModal,
    onOpenChange: onOpenChangeEditCateModal,
  } = useDisclosure();
  const handleEditCateModal = async (onClose) => {
    onClose();
    onOpenEditCateModal();
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
                  {/*  <Image
                    width={56}
                    height={56}
                    src={NotificationIcon}
                    alt="Add quiz icon"
                  /> */}
                </div>
                <div>
                  <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text dark:text-white">
                    ক্যাটাগরি ডিটেইলস
                  </h2>
                </div>
              </ModalHeader>
              <ModalBody>
                <form>
                  <div className=" flex flex-col w-full gap-2 mb-3">
                    <InputLabel label={"ক্যাটাগরি টাইটেল"} />
                    <input
                      name={"name"}
                      value={name}
                      required
                      type="text"
                      placeholder="ক্যাটাগরি এর নাম লিখুন..."
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                    />
                  </div>
                  <div className=" flex flex-col w-full gap-2 mb-3">
                    <InputLabel label={"ক্যাটাগরি Description"} />
                    <input
                      name={"description"}
                      value={description}
                      required
                      type="text"
                      placeholder="ক্যাটাগরি Description লিখুন..."
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={() => handleEditCateModal(onClose)}
                  type="submit"
                  className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                >
                  Edit Category
                  {/* <MdOutlineCircleNotifications size={24} /> */}
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
      <UpdateCategoryModal
        isOpen={isOpenEditCateModal}
        onOpenChange={onOpenChangeEditCateModal}
      />
    </>
  );
};

export default PreviewCategoryModal;
