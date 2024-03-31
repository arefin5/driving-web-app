import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import ConformationModal from "../../Shared/ConformationModal/ConformationModal";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import InputLabel from "../../ui/features/Dashboard/UserDashboard/UserProfile/InputLabel";
import { useState } from "react";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import useGetCategory from "@/src/Hooks/category/useGetCategory";
const AddCategoryModal = ({ isOpen, onOpenChange }) => {
  const {
    onOpen: onOpenConfrimModal,
    isOpen: isOpenConfrimModal,
    onOpenChange: onOpenChangeConfrimModal,
  } = useDisclosure();
  const axiosPublic = useAxiosPublic();
  const { refetch } = useGetCategory();
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });
  const [error, setError] = useState("");
  const handleCategoryChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };
  const handleConfrimModal = async (onClose) => {
    if (!category.name || !category.description) {
      setError(`This field is required`);
    }
    const CategoryData = {
      name: category.name,
      description: category.description,
    };
    try {
      const { data } = await axiosPublic.post(
        "/categories/addCategories",
        CategoryData
      );
  
      if (data.status === "success") {
        onClose();
        onOpenConfrimModal();
        refetch();
        setCategory({
          name: "",
          description: "",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
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
                    ক্যাটাগরি যোগ করুন
                  </h2>
                  <p className="text-base font-normal -mt-2">
                    তথ্যগুলো সঠিকভাবে ফিল আপ করুন{" "}
                    <span className="second-text-color dark:text-white">
                      (* require)
                    </span>
                  </p>
                </div>
              </ModalHeader>
              <ModalBody>
                <form>
                  <div className=" flex flex-col w-full gap-2 mb-3">
                    <InputLabel label={"ক্যাটাগরি টাইটেল"} />
                    <input
                      name={"name"}
                      value={category.name}
                      onChange={handleCategoryChange}
                      required
                      type="text"
                      placeholder="ক্যাটাগরি এর নাম লিখুন..."
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                    />
                    {!category.name && (
                      <p className="text-xs text-red-500">{error}</p>
                    )}
                  </div>
                  <div className=" flex flex-col w-full gap-2 mb-3">
                    <InputLabel label={"ক্যাটাগরি Description"} />
                    <input
                      onChange={handleCategoryChange}
                      name={"description"}
                      value={category.description}
                      required
                      type="text"
                      placeholder="ক্যাটাগরি Description লিখুন..."
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                    />
                    {!category.description && (
                      <p className="text-xs text-red-500">{error}</p>
                    )}
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={() => handleConfrimModal(onClose)}
                  type="submit"
                  className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                >
                  Add Category
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
      <ConformationModal
        message="category added successfully"
        isOpen={isOpenConfrimModal}
        onOpenChange={onOpenChangeConfrimModal}
      />
    </>
  );
};

export default AddCategoryModal;
