"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { MdPreview, MdOutlineQuiz, MdOutlinePreview } from "react-icons/md";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import { useDisclosure } from "@nextui-org/react";
import ViewQuizDetailsModal from "./ViewQuizDetailsModal";
import AddQuizQuestionModal from "./AddQuizQuestionModal";
import EditQuizQuestionModal from "./EditQuizQuestionModal";
import ViewQuizQuestionModal from "./ViewQuizQuestionModal";
import Image from "next/image";
import quizIcon from "/public/assets/Courses/quizIcon.svg";
import useGetSpecificQuiz from "@/src/Hooks/quiz/useGetSpecificQuiz";
import moment from "moment";
import { useState } from "react";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import AddQuizModal from "./AddQuizModal";

const QuizTable = () => {
  const axiosPublic = useAxiosPublic();
  const { data: quiz, refetch: quizsRefetch } = useGetSpecificQuiz();

  const [quizId, setQuizId] = useState("");
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();
  const {
    onOpen: onOpenAddQuiz,
    isOpen: isOpenAddQuiz,
    onOpenChange: onOpenChangeAddQuiz,
  } = useDisclosure();
  const {
    onOpen: onOpenEditQuiz,
    isOpen: isOpenEditQuiz,
    onOpenChange: onOpenChangeEditQuiz,
  } = useDisclosure();
  const {
    onOpen: onOpenViewQuiz,
    isOpen: isOpenViewQuiz,
    onOpenChange: onOpenChangeViewQuiz,
  } = useDisclosure();

  const handleViewDetails = () => {
    onOpen();
  };
  const handleEditQuiz = (id) => {
    setQuizId(id);
    onOpenEdit();
  };
  const handleDeleteQuiz = async (id) => {
    const { data } = await axiosPublic.delete(`/quiz/deleteQuizzes/${id}`);

    if (data.status === "success") {
      quizsRefetch();
    }
  };
  const handleAddQuizQus = (id) => {
    setQuizId(id);
    onOpenAddQuiz();
  };
  const handleViewAllQuestion = (id) => {
    setQuizId(id);
    onOpenViewQuiz();
  };

  return (
    <>
      <div className="relative border border-solid border-black/30 pb-4  rounded-xl font-semibold font-liador h-[595px] !max-h-full max-lg:overflow-scroll  overflow-y-auto lg:scrollbar-hide">
        <div className="max-lg:min-w-[800px] ">
          <div className="grid grid-cols-11 rounded-tr-xl mb-4 rounded-tl-xl text-center bg-loginButton py-4 px-5 text-white text-lg">
            <p className="col-span-2  ml-8 text-left">কুইজ</p>
            <p className="col-span-3">কোর্স নাম</p>
            <p>মডিউল</p>
            <p>স্টাটাস</p>
            <p className="col-span-2">সাবমিটের শেষ সময়</p>
            <p className="col-span-2">একশন</p>
          </div>
          <div>
            <div className="">
              <Accordion
                className="px-0 font-liador !gap-4 "
                variant="splitted"
                hideIndicator
                itemClasses={{
                  trigger: "p-0  text-base",
                  base: "!p-0 !gap-4 !mx-5 !my-0  border !rounded border-solid border-primarySolid !shadow-none dark:!bg-transparent",
                  heading: "text-base ",

                  title: "text-[#2B388F] font-liador ",
                }}
              >
                {quiz?.map((item, index) => (
                  <AccordionItem
                    key={item._id}
                    aria-label="Accordion 1"
                    title={
                      <div className="relative text-base dark:bg-transparent  bg-white rounded-xl">
                        <div className="primary-text-color dark:text-white dark:bg-transparent dark:border-gray-700  grid grid-cols-11 justify-between items-center py-3 px-[10px] ">
                          <div className=" font-medium whitespace-nowrap text-center flex items-center gap-2 col-span-2">
                            <Image
                              width={24}
                              height={24}
                              src={quizIcon}
                              alt=""
                            />
                            <span className="">
                              {index + 1}- {item?.title}
                            </span>
                          </div>
                          <p className="text-center col-span-3 ">
                            {item.quizCourse.slice(0, 15)}
                          </p>
                          <p className="text-center ">{item.quizModule}</p>
                          <p className=" text-center text-[#12B76A]">
                            {item.status}
                          </p>
                          <p className="  text-center col-span-2">
                            {moment(item.submitedLastDate).format("ddd DD MMM")}{" "}
                            at {item.submitedLastTime}:00
                          </p>

                          <div className="flex items-center justify-end gap-4 col-span-2 ">
                            {/* <MdPreview
                              onClick={handleViewDetails}
                              size={18}
                              color="#2B388F"
                            /> */}
                            <RiEdit2Line
                              onClick={() => {
                                handleEditQuiz(item._id);
                              }}
                              size={18}
                              className="cursor-pointer dark:text-white text-[#2B388F]"
                            />

                            <RiDeleteBin6Line
                              onClick={() => handleDeleteQuiz(item._id)}
                              size={18}
                              className="cursor-pointer dark:text-white text-[#2B388F]"
                            />
                            <IoMdArrowDropdownCircle
                              size={18}
                              className="cursor-pointer dark:text-white text-[#2B388F]"
                            />
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <div className=" flex justify-evenly">
                      <button
                        onClick={() => handleAddQuizQus(item._id)}
                        className="bg-primarySolid text-white py-3 w-[190px] text-center justify-center rounded flex items-center hover:bg-secondaryGradiant hover:text-white gap-[10px]"
                      >
                        Add Question <MdOutlineQuiz size={24} />
                      </button>
                      {/* <button className="bg-primarySolid text-white py-3 w-[190px] text-center justify-center rounded flex items-center gap-[10px] hover:bg-secondaryGradiant hover:text-white">
                        Update Question <RiEdit2Fill size={24} />
                      </button> */}
                      <button
                        onClick={() => handleViewAllQuestion(item._id)}
                        className="bg-primarySolid text-white py-3 w-[190px] text-center justify-center rounded flex items-center gap-[10px]  hover:bg-secondaryGradiant hover:text-white"
                      >
                        View All Question <MdOutlinePreview size={24} />
                      </button>
                      <button
                        onClick={() => {
                          setQuizId(item._id);
                          onOpenEditQuiz();
                        }}
                        className="bg-primarySolid text-white py-3 w-[190px] text-center justify-center rounded flex items-center gap-[10px] hover:bg-secondaryGradiant hover:text-white"
                      >
                        Edit Quiz Section <MdOutlineQuiz size={24} />
                      </button>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      {/* View modal open */}
      <ViewQuizDetailsModal isOpen={isOpen} onOpenChange={onOpenChange} />
      {/* Handle edit open modal */}
      <AddQuizModal
        id={quizId}
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
      />
      {/* Add Quiz Qustion Modal*/}
      <AddQuizQuestionModal
        quizId={quizId}
        isOpen={isOpenAddQuiz}
        onOpenChange={onOpenChangeAddQuiz}
      />
      {/* Edit Quiz Question Modal */}
      <EditQuizQuestionModal
        quizId={quizId}
        isOpen={isOpenEditQuiz}
        onOpenChange={onOpenChangeEditQuiz}
      />
      {/* View Questions details */}
      <ViewQuizQuestionModal
        quizId={quizId}
        isOpen={isOpenViewQuiz}
        onOpenChange={onOpenChangeViewQuiz}
      />
    </>
  );
};

export default QuizTable;
