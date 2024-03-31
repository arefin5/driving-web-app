"use client";
import { useParams } from 'next/navigation'
import ModalOpenButton from "@/src/components/ui/features/Dashboard/InstructorDashboard/ModalOpenButton";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab, useDisclosure } from "@nextui-org/react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import Module from '@/src/components/ui/features/Dashboard/InstructorDashboard/AllCourses/AddModule/Module';
import AddModuleModal from '@/src/components/ui/features/Dashboard/InstructorDashboard/AllCourses/AddModule/AddModuleModal';
import { useState } from 'react';

const AddCourseLessonPage = () => {
  const {addCourseLesson} = useParams();  
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [refetch,setRefetch]=useState(false);
 
  return (
    <div className="font-liador">
      <div className="flex justify-between items-center mb-4">
        <Title title="কোর্স লেসন" />
        <ModalOpenButton onclick={onOpen} value={"Add Module"} Icon={MdOutlineLibraryAdd} />
      </div>
      <div className="flex w-full flex-col underline_modifi">
        <Tabs
          aria-label="Options"
          variant="underlined"
          size="lg"
          fullWidth={false}
          color={"black"}
          className={`block tab`}
          classNames={{ tabList: "flex-wrap lg:flex-nowrap" }}
        >
          <Tab
            className={`items-start justify-start `}
            key="courseCurriculam"
            title="কোর্স কারিকুলাম"
          >
            <Module courseId={addCourseLesson} refetch={refetch} setRefetch={setRefetch} />
          </Tab>
          <Tab
            className={`items-start justify-start`}
            key="resorceFile"
            title="রিসোর্স ফাইলস"
          >
            <p>rest</p>
          </Tab>
          <Tab
            className={`items-start justify-start`}
            key="cirtifiate"
            title="সার্টিফিকেট"
          >
            <p>rest 22</p>
          </Tab>
        </Tabs>
      </div>

      <AddModuleModal isOpen={isOpen} onOpenChange={onOpenChange} setRefetch={setRefetch} refetch={refetch} />
    </div>
  );
};

export default AddCourseLessonPage;
