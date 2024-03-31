"use client";


import AddQuestionBaseAndExamModal from "@/src/components/Instructor/QuestionBaseAndExam/AddQuestionBaseAndExamModal";
import AllQuestionTable from "@/src/components/Instructor/QuestionBaseAndExam/AllQuestionTable";
import ModalOpenButton from "@/src/components/ui/features/Dashboard/InstructorDashboard/ModalOpenButton";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab, useDisclosure,  } from "@nextui-org/react";
const QuestionBaseAndExamPage = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="font-liador">
        <div className="flex justify-between items-center mb-4">
          <Title title="Question Base & Exam" />
          <ModalOpenButton
            onclick={onOpen}
            value={"Add Question Base & Exam"}
            // Icon={MdOutlineLibraryAdd}
          />
        </div>
        <div className="flex w-full flex-col underline_modifi">
          <Tabs
            aria-label="Options"
            variant="underlined"
            size="lg"
            fullWidth={false}
            color={"black"}
            className={`block tab`}
          >
            <Tab
              className={`items-start justify-start `}
              key="allCategory"
              title="All Question Base & Exam"
            >
             <AllQuestionTable></AllQuestionTable>
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* Add category modal  */}


      <AddQuestionBaseAndExamModal isOpen={isOpen} onOpenChange={onOpenChange}></AddQuestionBaseAndExamModal>


    </>
  );
};

export default QuestionBaseAndExamPage;
