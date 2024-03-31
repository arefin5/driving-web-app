import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import QuizIcon from "/public/assets/Courses/quizIcon.svg";
import { MdOutlineQuiz } from "react-icons/md";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import ConformationModal from "@/src/components/Shared/ConformationModal/ConformationModal";
import InputLabel from "../../UserDashboard/UserProfile/InputLabel";

import { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import { toast } from "react-toastify";
import UpdateHooks from "@/src/Hooks/UpdateHooks";
const AddQuizQuestionModal = ({
  isOpen,
  onOpenChange,
  quizId,
  questionId,
  refetch,
  setRefetch,
}) => {
  const axiosPublic = useAxiosPublic();

  const [formData, setFormData] = useState({
    question: "",
    answer: "none",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const {
    onOpen: onOpenConfrimModal,
    isOpen: isOpenConfrimModal,
    onOpenChange: onOpenChangeConfrimModal,
  } = useDisclosure();

  const handleChange = (e) => {
    if (e.target?.type === "radio") {
      setFormData({
        ...formData,
        answer: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // load data
  useEffect(() => {
    if (questionId) {
      fetch(
        `https://backend.driveshikhun.com/api/v1/quizQuestions/getQuizQuestionsById/${questionId}`
      ).then((res) => res.json().then((data) => setFormData(data?.data)));
    }
  }, [isOpen, questionId]);

  const handleConfrimModal = async (onClose) => {
    const questionData = {
      ...formData,
      quizId,
    };

    try {
      if (formData?._id) {
        await UpdateHooks(
          `https://backend.driveshikhun.com/api/v1/quizQuestions/updateQuizQuestions/${questionId}`,
          formData
        );
        setRefetch(!refetch);
        onClose();
      } else {
        const { data } = await axiosPublic.post(
          `/quizQuestions/addQuizQuestions`,
          questionData
        );
        // console.log(data);
        if (data.status === "success") {
          toast.success("Question Added!");
          onClose();
          setFormData({
            question: "",
            answer: 1,
            option1: "",
            option2: "",
            option3: "",
            option4: "",
          });
        }
      }
    } catch (error) {
      console.log(error);
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
              <ModalHeader className="flex items-center gap-1">
                <div>
                  <Image
                    width={56}
                    height={56}
                    src={QuizIcon}
                    alt="Add quiz icon"
                  />
                </div>
                <div>
                  <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text dark:text-white">
                    প্রশ্ন {questionId ? "আপডেট" : "যোগ"} করুন
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
                  <div className="flex flex-col  pt-4  gap-3 border-[#CE2786] border-solid mb-4">
                    <div className="flex justify-between">
                      <InputLabel label={`কুইজের প্রশ্ন লিখুন `} />
                    </div>

                    <textarea
                      onChange={handleChange}
                      className="py-3 text-black  appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      value={formData?.question}
                      name="question"
                      cols="30"
                      rows="3"
                      placeholder="এখানে প্রশ্ন লিখুন..."
                    ></textarea>

                    {/* Options */}
                    <div>
                      <div className="grid grid-cols-2 gap-x-12 gap-y-4 ">
                        {/* Option one design */}
                        <div className="flex items-center gap-5">
                          <label
                            className={` border border-solid flex-1 py-2 px-6 rounded-lg cursor-pointer`}
                          >
                            <input
                              type="radio"
                              name={`select1`}
                              value={formData?.option1}
                              checked={formData.answer === formData?.option1}
                              onChange={handleChange}
                              className="hidden"
                            />
                            <h2 className="flex items-center gap-4 text-xs">
                              <span
                                className={` bg-[#C3C9D5]/20 inline-block text-center w-10 border h-8 rounded-full leading-8 `}
                              >
                                1
                              </span>
                              <input
                                name="option1"
                                type="text"
                                placeholder="Enter Option Here"
                                value={formData?.option1}
                                onChange={handleChange}
                                className=" p-2 outline-0 w-full"
                              />
                            </h2>
                          </label>
                          <div className="w-8 h-8 bg-[#F2F2F2] border border-solid border-black/60 flex items-center justify-center rounded-full">
                            {formData.answer === formData?.option1 && (
                              <FaRegCircleCheck color="#03B562" size={20} />
                            )}
                          </div>
                        </div>
                        {/* Option two design */}
                        <div className="flex items-center gap-5">
                          <label
                            className={` border border-solid flex-1 py-2 px-6 rounded-lg cursor-pointer`}
                          >
                            <input
                              type="radio"
                              name={`select2`}
                              value={formData?.option2}
                              checked={formData.answer === formData?.option2}
                              onChange={handleChange}
                              className="hidden"
                            />
                            <h2 className="flex items-center gap-4 text-xs">
                              <span
                                className={` bg-[#C3C9D5]/20 inline-block text-center w-10 border h-8 rounded-full leading-8 `}
                              >
                                1
                              </span>
                              <input
                                name="option2"
                                type="text"
                                placeholder="Enter Option Here"
                                value={formData?.option2}
                                onChange={handleChange}
                                className=" p-2 outline-0 w-full"
                              />
                            </h2>
                          </label>
                          <div className="w-8 h-8 bg-[#F2F2F2] border border-solid border-black/60 flex items-center justify-center rounded-full">
                            {formData.answer === formData?.option2 && (
                              <FaRegCircleCheck color="#03B562" size={20} />
                            )}
                          </div>
                        </div>
                        {/* Option three design */}
                        <div className="flex items-center gap-5">
                          <label
                            className={` border border-solid flex-1 py-2 px-6 rounded-lg cursor-pointer`}
                          >
                            <input
                              type="radio"
                              name={`select3`}
                              value={formData?.option3}
                              checked={formData.answer === formData?.option3}
                              onChange={handleChange}
                              className="hidden"
                            />
                            <h2 className="flex items-center gap-4 text-xs">
                              <span
                                className={` bg-[#C3C9D5]/20 inline-block text-center w-10 border h-8 rounded-full leading-8 `}
                              >
                                3
                              </span>
                              <input
                                name="option3"
                                type="text"
                                placeholder="Enter Answer Here"
                                value={formData?.option3}
                                onChange={handleChange}
                                className=" p-2 outline-0 w-full"
                              />
                            </h2>
                          </label>
                          <div className="w-8 h-8 bg-[#F2F2F2] border border-solid border-black/60 flex items-center justify-center rounded-full">
                            {formData.answer === formData?.option3 && (
                              <FaRegCircleCheck color="#03B562" size={20} />
                            )}
                          </div>
                        </div>
                        {/* Option four design */}
                        <div className="">
                          <label className={`  flex items-center gap-5 `}>
                            <div className="border border-solid flex-1 py-2 px-6 rounded-lg cursor-pointer">
                              <input
                                type="radio"
                                name={`select4`}
                                value={formData?.option4}
                                checked={formData.answer === formData?.option4}
                                onChange={handleChange}
                                className="hidden"
                              />
                              <h2 className="flex items-center gap-4 text-xs">
                                <span
                                  className={` bg-[#C3C9D5]/20 inline-block text-center w-10 border h-8 rounded-full leading-8 `}
                                >
                                  4
                                </span>
                                <input
                                  name="option4"
                                  type="text"
                                  placeholder="Enter Answer Here"
                                  value={formData?.option4}
                                  onChange={handleChange}
                                  className=" p-2 outline-0 w-full"
                                />
                              </h2>
                            </div>

                            <div className="w-8 h-8 bg-[#F2F2F2] border border-solid border-black/60 flex items-center justify-center rounded-full">
                              {formData.answer === formData?.option4 && (
                                <FaRegCircleCheck color="#03B562" size={20} />
                              )}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={() => handleConfrimModal(onClose)}
                  type="submit"
                  className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                >
                  {questionId ? "Update" : "Add"} Questions
                  <MdOutlineQuiz size={24} />
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
        isOpen={isOpenConfrimModal}
        onOpenChange={onOpenChangeConfrimModal}
      />
    </>
  );
};

export default AddQuizQuestionModal;
