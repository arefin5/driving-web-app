"use client";
import ModalOpenButton from "@/src/components/ui/features/Dashboard/InstructorDashboard/ModalOpenButton";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { MdLibraryBooks, MdOutlineQuiz } from "react-icons/md";

import { Tabs, Tab, useDisclosure } from "@nextui-org/react";

import QuizTable from "@/src/components/ui/features/Dashboard/InstructorDashboard/QuizAndAssesment/QuizTable";
import AddQuizModal from "@/src/components/ui/features/Dashboard/InstructorDashboard/QuizAndAssesment/AddQuizModal";
import { useState } from "react";
import AssignmentTable from "@/src/components/ui/features/Dashboard/InstructorDashboard/Assignment/AssignmentTable";
import AddAssignmentModal from "@/src/components/ui/features/Dashboard/InstructorDashboard/Assignment/AddAssignmentModal";

const AddQuizAndAssestment = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const {
    onOpen: onOpenAddAssignment,
    isOpen: isOpenAddAssignment,
    onOpenChange: onOpenChanggeAddAssignment,
  } = useDisclosure();
  const [activeTab, setActiveTab] = useState("quiz");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  return (
    <>
      <div className="font-liador">
        <div className="flex justify-between items-center mb-4">
          <Title title="কুইজ ও অ্যাসাইনমেন্ট" />
          {activeTab === "quiz" ? (
            <ModalOpenButton
              onclick={onOpen}
              value={"Add Quiz"}
              Icon={MdOutlineQuiz}
            />
          ) : (
            <ModalOpenButton
              onclick={onOpenAddAssignment}
              value={"Add Assignment"}
              Icon={MdLibraryBooks}
            />
          )}
        </div>
        <div className="flex w-full flex-col underline_modifi">
          <Tabs
            aria-label="Options"
            variant="underlined"
            size="lg"
            fullWidth={false}
            color={"black"}
            className={`block tab`}
            onSelectionChange={handleTabChange}
            selectedKey={activeTab}
            classNames={{ tabList: "flex-wrap md:flex-nowrap" }}
          >
            <Tab
              className={`items-start justify-start `}
              key="quiz"
              title="কুইজ"
            >
              <QuizTable />
            </Tab>
            <Tab
              className={`items-start justify-start`}
              key="assignment"
              title="অ্যাসাইনমেন্ট"
            >
              <AssignmentTable />
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* Add Quiz modal */}
      <AddQuizModal isOpen={isOpen} onOpenChange={onOpenChange} />
      {/* Add Assinment Modal */}
      <AddAssignmentModal
        isOpen={isOpenAddAssignment}
        onOpenChange={onOpenChanggeAddAssignment}
      />
    </>
  );
};

export default AddQuizAndAssestment;
