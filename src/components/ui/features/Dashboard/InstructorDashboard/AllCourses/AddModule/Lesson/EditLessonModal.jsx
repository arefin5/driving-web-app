import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
  } from "@nextui-org/react";
  import Image from "next/image";
  import { MdOutlineLibraryAdd } from "react-icons/md";
  import InputLabel from "../../../../UserDashboard/UserProfile/InputLabel";
  import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
  import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
  import ConformationModal from "@/src/components/Shared/ConformationModal/ConformationModal";
  import { useEffect, useState } from "react";
  import UpdateHooks from "@/src/Hooks/UpdateHooks";
  
  const EditLessonModal = ({
    isOpen,
    onOpenChange,
    setRefetch,
    refetch,
    lessonId,
  }) => {
 
    const {
      onOpen: onOpenConfrimModal,
      isOpen: isOpenConfrimModal,
      onOpenChange: onOpenChangeConfrimModal,
    } = useDisclosure();
  
    const [formData, setFormData] = useState({
        title: "",
        lessonNumber: "",
        videoUrl: "",
      });
  
    useEffect(() => {
      fetch(
        `https://backend.driveshikhun.com/api/v1/lesson/getLessonsById/${lessonId}`
      ).then((res) =>
        res.json().then((data) => {
          setFormData(data?.data);
        })
      );
    }, [lessonId]);
  
    const handleInputChange = (e) => {
      const { name, value, type, files } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "file" ? files[0] : value,
      }));
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();

      
      try {
        await UpdateHooks(
          `https://backend.driveshikhun.com/api/v1/lesson/updateLessons/${lessonId}`,
          formData
        );
        setRefetch(!refetch);
        onOpenChange();
      } catch (err) {
        console.log(err);
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
                  <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text dark:text-white">
                    মডিউল আপডেট করুন
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
                  {/* Lesson Title, enrollment start, enrollment end */}

                  <div className="basis-1/2 flex flex-col w-full gap-2 mb-3">
                    <InputLabel label={"লেসন নাম্বার "} />
                    <input
                      required
                      type="number"
                      name="lessonNumber"
                      value={formData?.lessonNumber}
                      onChange={handleInputChange}
                      placeholder="লেসন নাম্বার "
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                    />
                  </div>
                  <div className="basis-1/2 flex flex-col w-full gap-2 mb-3">
                    <InputLabel label={"লেসন টাইটেল লিখুন"} />
                    <input
                      required
                      type="text"
                      name="title"
                      value={formData?.title}
                      onChange={handleInputChange}
                      placeholder="লেসন  টাইটেল লিখুন"
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                    />
                  </div>

                  <div className="basis-1/2 flex flex-col w-full gap-2 mb-3">
                    <InputLabel label={"লেসন ভিডিও লিংক লিখুন"} />
                    <input
                      required
                      type="text"
                      name="videoUrl"
                      value={formData?.videoUrl}
                      onChange={handleInputChange}
                      placeholder="লেসন ভিডিও লিংক লিখুন"
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={handleFormSubmit}
                  type="button"
                  className="bg-secondaryGradiant justify-center gap-[10px] mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                >
                  Update Lesson
                  <MdOutlineLibraryAdd size={24} />
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
          </ModalContent>
        </Modal>
        {/* Handle open modal */}
        <ConformationModal
          isOpen={isOpenConfrimModal}
          onOpenChange={onOpenChangeConfrimModal}
        />
      </>
    );
  };
  
  export default EditLessonModal;
  